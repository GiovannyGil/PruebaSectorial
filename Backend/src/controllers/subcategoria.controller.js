import Subcategoria from '../models/Subcategoria.model.js';
import Tema from '../models/Tema.model.js';

// Crear una subcategoría
export async function createSubcategoria(req, res) {
  try {
      const { nombre, temas } = req.body;

      // Verificar que los temas existen
      const temasExistentes = await Tema.find({ _id: { $in: temas } });
      if (temasExistentes.length !== temas.length) {
          return res.status(400).json({ message: 'Algunos temas no existen' });
      }

      const nuevaSubcategoria = new Subcategoria({ nombre, temas });
      await nuevaSubcategoria.save();
      res.status(201).json({ message: 'Subcategoría creada', data: nuevaSubcategoria });
  } catch (error) {
      res.status(400).json({ message: 'Error al crear la subcategoría', error: error.message });
  }
}

// Obtener todas las subcategorías
export async function getSubcategorias(req, res) {
  try {
      const subcategorias = await Subcategoria.find().populate('temas'); // obtiene los temas asociados a la subcategoría
      res.status(200).json(subcategorias);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener las subcategorías', error: error.message });
  }
}

// Obtener una subcategoría por su ID
export async function getSubcategoriaById(req, res) {
  try {
      const subcategoria = await Subcategoria.findById(req.params.id).populate('temas');
      if (!subcategoria) return res.status(404).json({ message: 'Subcategoría no encontrada' });
      res.status(200).json({
          message: 'Subcategoría encontrada',
          data: subcategoria // Cambié `subcategoria` a `data: subcategoria` para mantener la consistencia
      });
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener la subcategoría', error: error.message });
  }
}

// Eliminar una subcategoría
export async function deleteSubcategoria(req, res) {
  try {
      const subcategoriaEliminada = await Subcategoria.findByIdAndDelete(req.params.id);
      if (!subcategoriaEliminada) return res.status(404).json({ message: 'Subcategoría no encontrada' });
      res.status(200).json({ message: 'Subcategoría eliminada' });
  } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la subcategoría', error: error.message });
  }
}

// Inactivar una subcategoría
export async function inactivarSubcategoria(req, res) {
  try {
      const subcategoriaId = req.params.id;
      const subcategoria = await Subcategoria.findById(subcategoriaId);
      if (!subcategoria) return res.status(404).json({ message: 'Subcategoría no encontrada' });

      await Subcategoria.findByIdAndUpdate(subcategoriaId, { inactivo: true }, { new: true }); // Retornar el documento actualizado
      res.json({ message: "Subcategoría inactivada" });
  } catch (error) {
      res.status(500).json({ message: 'Error al inactivar la subcategoría', error: error.message });
  }
}