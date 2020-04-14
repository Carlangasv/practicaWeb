let consultar = () => {
  params = {
    nombre: "ig",
  };
  axios.get("http://localhost:3000/registros", params).then((response) => {
    console.log("Respuesta del api");
    console.log(response);
  });
};

let insertar = () => {
  let nombreF = document.getElementById("txtNombre").value;
  let urlF = document.getElementById("txtUrl").value;
  let descF = document.getElementById("txtDescripcion").value;
  if (validar(nombreF, urlF)) {
    params = {
      nombre: nombreF,
      url: urlF,
      descripcion: descF,
    };
    axios
      .post("http://localhost:3000/registros", params)
      .then((response) => {});
    alert("Url registrada");
    nombreF = document.getElementById("txtNombre").value = "";
    urlF = document.getElementById("txtUrl").value = "";
    descF = document.getElementById("txtDescripcion").value = "";
  } else {
    alert("El nombre y la url son obligatorias");
  }
};

let validar = (nom, ur) => {
  if (nom == "") {
    return false;
  } else if (ur == "") {
    return false;
  } else {
    return true;
  }
};