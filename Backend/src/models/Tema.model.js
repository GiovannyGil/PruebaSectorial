import { Schema, model } from "mongoose";

const TemaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    inactivo: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default model('Tema', TemaSchema);


/**
 * [
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
]
 */