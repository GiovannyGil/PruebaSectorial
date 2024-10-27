import express from 'express';
import connectDB from './src/config/conexion.js'
import dotenv from 'dotenv';
import morgan from "morgan";
import cors from "cors"

// configurar variables de entorno
dotenv.config();

// inicializar express
const app = express()
// conectar a la base de datos
connectDB()

// middlewares
app.use(cors()) // para que cualquier dominio lea o haga peticiones
app.use(morgan('dev')) // para ver las peticiones en consola
app.use(express.json()) // para que pueda recibir datos en formato json
app.use(express.urlencoded({ extended: true })) // para que pueda recibir datos de formularios

// rutas -> categorias
import rutasCategoria from './src/routes/categorias.router.js'
app.use('/api', rutasCategoria)
// rutas -> subcategorias
import rutasSubcategoria from './src/routes/subcategorias.router.js'
app.use('/api', rutasSubcategoria)
// rutas -> temas
import rutasTema from './src/routes/temas.router.js'
app.use('/api', rutasTema)

// condiciones de la ruta equivocada -> dar info de cual es la ruta correcta
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada, la ruta a la que debe ingresar es: http://localhost:3000/api' })
})  


// puerto -> iniciar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}, http://localhost:${PORT}`)
})

export default app;