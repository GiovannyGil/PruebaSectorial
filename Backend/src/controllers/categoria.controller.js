import Categoria from '../models/Categoria.model.js';
import Subcategoria from '../models/Subcategoria.model.js';

// Crear una nueva categoría
export async function createCategoria(req, res) {
    try {
        const { nombre, subcategorias } = req.body;

        // Verificar que las subcategorías existen
        const subcategoriasExistentes = await Subcategoria.find({ _id: { $in: subcategorias } });
        if (subcategoriasExistentes.length !== subcategorias.length) {
            return res.status(400).json({ message: 'Algunas subcategorías no existen' });
        }

        const nuevaCategoria = new Categoria({ nombre, subcategorias });
        await nuevaCategoria.save();
        res.status(201).json({ message: 'Categoría creada', data: nuevaCategoria });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la categoría', error: error.message });
    }
}

// Obtener todas las categorías
export async function getCategorias(req, res) {
    try {
        const categorias = await Categoria.find().populate('subcategorias');
        res.status(200).json({ categorias });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las categorías", error: error.message });
    }
}

// Obtener una categoría por su ID
export async function getCategoriaById(req, res) {
    try {
        const categoria = await Categoria.findById(req.params.id).populate('subcategorias');
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json({ message: 'Categoría encontrada', data: categoria });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría', error: error.message });
    }
}

// Eliminar una categoría
export async function deleteCategoria(req, res) {
    try {
        const categoriaId = req.params.id;
        const categoria = await Categoria.findById(categoriaId).populate('subcategorias');
        if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });

        if (categoria.subcategorias.length > 0) { // Comprobar si tiene subcategorías
            return res.status(400).json({ message: "No se puede eliminar la categoría porque tiene subcategorías asociadas" });
        }

        await Categoria.findByIdAndDelete(categoriaId);
        res.status(200).json({ message: "Categoría eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la categoría", error: error.message });
    }
}

// Inactivar una categoría
export async function inactivarCategoria(req, res) {
    try {
        const categoriaId = req.params.id;
        const categoria = await Categoria.findById(categoriaId);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });

        await Categoria.findByIdAndUpdate(categoriaId, { inactivo: true }, { new: true });
        res.json({ message: "Categoría inactivada" });
    } catch (error) {
        res.status(500).json({ message: 'Error al inactivar la categoría', error: error.message });
    }
}

