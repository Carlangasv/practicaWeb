//Importamos la dependecia de postgres
const { Pool } = require("pg");

class ServicioPG {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "Url",
      password: "123Vayne",
      port: 5432
    });
}
/**
 * Se ejecuta una consulta sql, se debe hacer con un metodo
 * asincrono ya que el orden de ejecucion es relevante
 * @param {*} sql la consulta a ejecutar
 */
  async ejecutarSql(sql) {
    let respuesta = await this.pool.query(sql);
    return respuesta;
  }
}
//Se exporta la clase para que pueda ser usada en todo el proyecto
module.exports = ServicioPG;
