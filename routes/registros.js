//Importamos la libreria express
const express = require("express");
/**
 * Creamos una función de tipo middleware
 * Esta función ya viene por defecto con express
 */
const router = express.Router();
/**
 * Metodo get para la ruta de registros,este se encarga
 * de realizar consultas en nuestra base de datos
 */
router.get("/registros", (req, res) => {
    

});
