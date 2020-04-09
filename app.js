//Importamos express
const express = require("express");

//Se inicializa la libreria
const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json());

//Se crea el endpoint (Este delimita hasta donde va el api)
/**
 * URI's  disponibles en el API
 */
app.get("/", (req, res) => {
  res.send("Bienvenido a la API guardado de urls");
});
// IMPORTAR las rutas con los endpoints especificos
const rutas_registros = require("./routes/registros");
app.use(rutas_registros);

// Puerto
const port = 3000;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
