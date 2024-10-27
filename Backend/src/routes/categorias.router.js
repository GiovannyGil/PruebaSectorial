import { Router } from 'express'
import * as categoriaController from '../controllers/categoria.controller.js';

// inicair express -> rutas
const router = Router()

// Rutas para categorías
router.post('/categoria', categoriaController.createCategoria);
router.get('/categorias', categoriaController.getCategorias);
router.get('/categoria/:id', categoriaController.getCategoriaById);
router.delete('/categoria/:id', categoriaController.deleteCategoria);
router.put('/categoria/inactivar/:id', categoriaController.inactivarCategoria);
// url por defecto
router.get('/', (req, res) => {
    res.send(
        'Bienvenido!\n' + 
        'blas rutas para acceder a la API, debe ingresar a la ruta: http://localhost:3000/api\n' +
        'Para ver las categorías, debe ingresar a la ruta: http://localhost:3000/api/categorias\n' +
        'Para ver las subcategorias, debe ingresar a la ruta: http://localhost:3000/api/subcategorias\n' +
        'Para ver las temas, debe ingresar a la ruta: http://localhost:3000/api/temas\n'
    )
})

export default router;