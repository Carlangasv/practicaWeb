const axios = require('axios');
let consultar = () => {
   
    axios.get("http://localhost:3000/registros",{
        params = {
            nombre : "ig"
          }
    }).then((response) => {
      console.log("Respuesta del api");
      console.log(response);
    });
  };
  let insertar = () => {
    params = {
      nombre : 'ig2',
      url : 'instagram.com',
      descripcion : 'xd'
    }
    axios.post("http://localhost:3000/registros",params).then((response) =>{
    console.log("Intento de insert")
    console.log(response)
  })}
  consultar()