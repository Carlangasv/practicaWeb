//Importamos la libreria express
const express = require("express");
/**
 * Creamos una función de tipo middleware
 * Esta función ya viene por defecto con express
 */

const router = express.Router();
//Se importa el controlador que permite hacer todas las acciones de los registros

const _controlador = require("../controllers/registros");
/**
 * Metodo get para la ruta de registros,este se encarga
 * de mostrar el resultado del select en la base de datos
 */

router.get("/registros", (req, res) => {
  _controlador
    .consultarRegistro()
    .then((respuestaDB) => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "registros consultados" });
    })
    .catch((error) => {
      res.send(error);
    });
});

/**
 * Guardamos el registro
 */
router.post("/registros", async (req, res) => {
  try {
    //Capturamos el body de la solicitud
    let info_reg = await req.body;

    //Valida la información, si hay un error se envia al catch
    _controlador.validarRegistro(info_reg);

    //Guardamos el registro en la base de datos
    _controlador
      .guardarRegistro(info_reg)
      .then((respuestaDB) => {
        res.send({ ok: true, mensaje: "Registro guardado", info: info_reg });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});
// Se exporta el router para poder usarlo desde otros archivos
module.exports = router;
