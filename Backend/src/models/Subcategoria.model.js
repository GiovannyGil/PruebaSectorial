import { Schema, model } from "mongoose";

const SubcategoriaSchema = new Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    temas: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Tema',
        required: true, // Al menos un tema es necesario
    }],
    inactivo: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default model('Subcategoria', SubcategoriaSchema);


/**
 * [
    {
        "_id": "671d5db20a1fed2b7560d5ba",
        "nombre": "Subcategoría 1",
        "temas": [
            {
                "_id": "671d5cf65c113b24717fccda",
                "nombre": "JS",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:50.693Z",
                "updatedAt": "2024-10-26T21:19:50.693Z",
                "__v": 0
            },
            {
                "_id": "671d5cfa5c113b24717fccdc",
                "nombre": "TS",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:54.119Z",
                "updatedAt": "2024-10-26T21:19:54.119Z",
                "__v": 0
            }
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
            {
                "_id": "671d5cf65c113b24717fccda",
                "nombre": "JS",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:50.693Z",
                "updatedAt": "2024-10-26T21:19:50.693Z",
                "__v": 0
            },
            {
                "_id": "671d5cfa5c113b24717fccdc",
                "nombre": "TS",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:54.119Z",
                "updatedAt": "2024-10-26T21:19:54.119Z",
                "__v": 0
            },
            {
                "_id": "671d5cfe5c113b24717fccde",
                "nombre": "SQL",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:58.184Z",
                "updatedAt": "2024-10-26T21:19:58.184Z",
                "__v": 0
            }
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
            {
                "_id": "671d5cf65c113b24717fccda",
                "nombre": "JS",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:50.693Z",
                "updatedAt": "2024-10-26T21:19:50.693Z",
                "__v": 0
            },
            {
                "_id": "671d5cfa5c113b24717fccdc",
                "nombre": "TS",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:54.119Z",
                "updatedAt": "2024-10-26T21:19:54.119Z",
                "__v": 0
            },
            {
                "_id": "671d5cfe5c113b24717fccde",
                "nombre": "SQL",
                "inactivo": false,
                "createdAt": "2024-10-26T21:19:58.184Z",
                "updatedAt": "2024-10-26T21:19:58.184Z",
                "__v": 0
            }
        ],
        "inactivo": false,
        "createdAt": "2024-10-26T21:23:13.823Z",
        "updatedAt": "2024-10-26T21:23:13.823Z",
        "__v": 0
    },
]
 */