import { Router } from 'express'
import * as subcategoriaController from '../controllers/subcategoria.controller.js'

// Iniciar express -> rutas
const router = Router()

// Rutas para subcategorías
router.post('/subcategoria', subcategoriaController.createSubcategoria)
router.get('/subcategorias', subcategoriaController.getSubcategorias)
router.get('/subcategoria/:id', subcategoriaController.getSubcategoriaById)
router.delete('/subcategoria/:id', subcategoriaController.deleteSubcategoria)
router.put('/subcategoria/inactivar/:id', subcategoriaController.inactivarSubcategoria)
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


