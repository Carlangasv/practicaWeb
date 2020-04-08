/**
 * Importamos el servicio de postgres, esto nos permitira
 * realizar acciones en la base de datos
 */

const ServicioPg = require("../services/postgres");
/**
 * Se valida si un registro puede ser guardado en la base de datos
 * @param {*} registro Json del registro
 */

let validarRegistro = registro => {
  if (!registro) {
    throw { ok: false, mensaje: "la información del registro es obligatoria" };
  }else if (!registro.nombre) {
    throw { ok: false, mensaje: "el nombre es obligatorio" };
  }else if (!registro.url) {
    throw { ok: false, mensaje: "la url es obligatoria" };
  }
};
/**
 * Se inserta el registro en la base de datos
 * El metodo debe ser async, aqui el orden de ejecución es importante,
 * si no tuvieramos esto la respuesta del metodo seria undefined
 * @param {*} registro Json del registro
 */

let guardarRegistro = async (registro) => {
  let _servicio = new ServicioPg();
  let sql = `INSERT INTO public.registros(url,
        descripcion,nombre) VALUES (
            '${registro.url}',
            '${registro.descripcion}',
            '${registro.nombre}');`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};
/**
 * Se consultan todos los registros de la base de datos para mostrarlos
 */

let consultarRegistro = async (registro) => {
  let _servicio = new ServicioPg();
  let sql = `SELECT (url,descripcion,nombre) FROM public.registros where nombre like '%${registro.nombre}%'`;
  let respuesta = await _servicio.ejecutarSql(sql);
  return respuesta;
};
/**
 * Se exportan los metodos para poder usarse desde otros archivos,
 * se exportan usando destructuración para hacerlo mas facil
 */
module.exports = { validarRegistro, guardarRegistro,consultarRegistro };
