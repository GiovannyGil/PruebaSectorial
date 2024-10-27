import Tema from '../models/Tema.model.js';
import Subcategoria from '../models/Subcategoria.model.js';

// Insertar nuevo tema
export async function crearTema(req, res) {
    try {
        const { nombre } = req.body; // Extraer el nombre del tema

        const nuevoTema = new Tema({ nombre });
        await nuevoTema.save();
        res.status(201).json({ message: 'Tema creado', data: nuevoTema });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el tema', error: error.message });
    }
}

// Obtener todos los temas
export async function obtenerTemas(req, res) {
    try {
        const temas = await Tema.find();
        res.status(200).json(temas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los temas', error: error.message });
    }
}

// Obtener un tema por su ID
export async function obtenerTemaPorId(req, res) {
    try {
        const tema = await Tema.findById(req.params.id);
        if (!tema) return res.status(404).json({ message: 'Tema no encontrado' });
        res.status(200).json({ message: 'Tema encontrado', data: tema }); 
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el tema', error: error.message });
    }
}

// Eliminar un tema
export async function eliminarTema(req, res) {
    try {
        const temaId = req.params.id;
        const tema = await Tema.findById(temaId);
        if (!tema) return res.status(404).json({ message: 'Tema no encontrado' });

        // Actualizar las subcategorías para eliminar el tema
        await Subcategoria.updateMany({ temas: temaId }, { $pull: { temas: temaId } });
        await Tema.findByIdAndDelete(temaId);

        res.status(200).json({ message: 'Tema eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el tema', error: error.message });
    }
}

// Inactivar un tema
export async function inactivarTema(req, res) {
    try {
        const temaId = req.params.id;
        const tema = await Tema.findById(temaId);
        if (!tema) return res.status(404).json({ message: 'Tema no encontrado' });

        await Tema.findByIdAndUpdate(temaId, { inactivo: true }, { new: true }); // Retornar el documento actualizado
        res.json({ message: "Tema inactivado" });
    } catch (error) {
        res.status(500).json({ message: 'Error al inactivar el tema', error: error.message });
    }
}