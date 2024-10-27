import { Schema, model } from "mongoose";

const CategoriaSchema = new Schema({
    nombre: {
        type: String, 
        required: true,
    },
    subcategorias: [{
        type: Schema.Types.ObjectId,
        ref: 'Subcategoria',
        required: true, // Al menos una subcategoría es necesaria
    }],
    inactivo: {
        type: Boolean, 
        default: false
    }
}, { timestamps: true });

export default model('Categoria', CategoriaSchema);


/**
 * {
    "categorias": [
        {
            "_id": "671d5e70c4629cfab0c8d24c",
            "nombre": "Categoría 1",
            "subcategorias": [
                {
                    "_id": "671d5db20a1fed2b7560d5ba",
                    "nombre": "Subcategoría 1",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:22:58.149Z",
                    "updatedAt": "2024-10-26T21:22:58.149Z",
                    "__v": 0
                }
            ],
            "inactivo": false,
            "createdAt": "2024-10-26T21:26:08.908Z",
            "updatedAt": "2024-10-26T21:26:08.908Z",
            "__v": 0
        },
        {
            "_id": "671d5e7dc4629cfab0c8d24f",
            "nombre": "Categoría 2",
            "subcategorias": [
                {
                    "_id": "671d5db20a1fed2b7560d5ba",
                    "nombre": "Subcategoría 1",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:22:58.149Z",
                    "updatedAt": "2024-10-26T21:22:58.149Z",
                    "__v": 0
                },
                {
                    "_id": "671d5dbe0a1fed2b7560d5bd",
                    "nombre": "Subcategoría 2",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc",
                        "671d5cfe5c113b24717fccde"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:23:10.833Z",
                    "updatedAt": "2024-10-26T21:23:10.833Z",
                    "__v": 0
                }
            ],
            "inactivo": false,
            "createdAt": "2024-10-26T21:26:21.973Z",
            "updatedAt": "2024-10-26T21:26:21.973Z",
            "__v": 0
        },
        {
            "_id": "671d5e8cc4629cfab0c8d252",
            "nombre": "Categoría 3",
            "subcategorias": [
                {
                    "_id": "671d5db20a1fed2b7560d5ba",
                    "nombre": "Subcategoría 1",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:22:58.149Z",
                    "updatedAt": "2024-10-26T21:22:58.149Z",
                    "__v": 0
                },
                {
                    "_id": "671d5dbe0a1fed2b7560d5bd",
                    "nombre": "Subcategoría 2",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc",
                        "671d5cfe5c113b24717fccde"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:23:10.833Z",
                    "updatedAt": "2024-10-26T21:23:10.833Z",
                    "__v": 0
                },
                {
                    "_id": "671d5dc10a1fed2b7560d5c0",
                    "nombre": "Subcategoría 3",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc",
                        "671d5cfe5c113b24717fccde"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:23:13.823Z",
                    "updatedAt": "2024-10-26T21:23:13.823Z",
                    "__v": 0
                }
            ],
            "inactivo": false,
            "createdAt": "2024-10-26T21:26:36.173Z",
            "updatedAt": "2024-10-26T21:26:36.173Z",
            "__v": 0
        },
        {
            "_id": "671d5e95c4629cfab0c8d255",
            "nombre": "Categoría 4",
            "subcategorias": [
                {
                    "_id": "671d5db20a1fed2b7560d5ba",
                    "nombre": "Subcategoría 1",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:22:58.149Z",
                    "updatedAt": "2024-10-26T21:22:58.149Z",
                    "__v": 0
                },
                {
                    "_id": "671d5dbe0a1fed2b7560d5bd",
                    "nombre": "Subcategoría 2",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc",
                        "671d5cfe5c113b24717fccde"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:23:10.833Z",
                    "updatedAt": "2024-10-26T21:23:10.833Z",
                    "__v": 0
                },
                {
                    "_id": "671d5dc10a1fed2b7560d5c0",
                    "nombre": "Subcategoría 3",
                    "temas": [
                        "671d5cf65c113b24717fccda",
                        "671d5cfa5c113b24717fccdc",
                        "671d5cfe5c113b24717fccde"
                    ],
                    "inactivo": false,
                    "createdAt": "2024-10-26T21:23:13.823Z",
                    "updatedAt": "2024-10-26T21:23:13.823Z",
                    "__v": 0
                }
            ],
            "inactivo": true,
            "createdAt": "2024-10-26T21:26:45.100Z",
            "updatedAt": "2024-10-26T21:27:19.820Z",
            "__v": 0
        }
    ]
}
 */