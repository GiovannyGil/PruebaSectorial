import { Router } from "express"
import * as temaController from "../controllers/tema.controller.js"

// Iniciar express -> rutas
const router = Router()

// Rutas para temas
router.post("/tema", temaController.crearTema)
router.get("/temas", temaController.obtenerTemas)
router.get("/tema/:id", temaController.obtenerTemaPorId)
router.delete("/tema/:id", temaController.eliminarTema)
router.put("/tema/inactivar/:id", temaController.inactivarTema)
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