var data = [];
//Se trae la información del api y se muestra en una tabla
let consultar = () => {
  axios.get("http://localhost:3000/registros").then(async (response) => {
    registros = await response.data.info;
    console.log(registros);
    let lista = document.getElementById("listaRegistros");
    lista.innerHTML = "";
    for (let i = 0; i < registros.length; i++) {
      data += "<tr>";
      data += `<td>${registros[i].id}</td>`;
      data += `<td>${registros[i].url}</td>`;
      data += `<td>${registros[i].nombre} </td>`;
      data += `<td>${registros[i].descripcion} </td>`;
      data +=
        '<td><button type="button" onclick="eliminarRegistro(' +
        registros[i].id +
        ')" class="btn btn-primary btn-sm">Eliminar</button> </td>';
      data += "</tr>";
    }
    lista.innerHTML = data;
  });
};
//Metodo para eliminar, se pasa el id como parametro ya que esta es la pk en la tabla
let eliminarRegistro = (idP) => {
  data = {
    id: idP,
  };
  axios.delete("http://localhost:3000/registros", { data }).then((response) => {
    consultar();
  });
  alert("Registrado eliminado");
};

consultar();
