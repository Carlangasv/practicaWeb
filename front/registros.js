var data = [];
    let consultar = () => {
      axios.get("http://localhost:3000/registros").then((response) => {
        console.log("Respuesta del api");
        console.log(response);
        registros = response.data.info;
        console.log(registros);
        let lista = document.getElementById("listaRegistros");
        let data = "";
        for (let i = 0; i < registros.length; i++) {
          let miReg = "";
          miReg = registros[i].row.toString();
          regi = [];
          regi = miReg.split(",");
          data += "<tr>";
          data += `<td>${regi[0].replace("(", "")}</td>`;
          data += `<td>${regi[1]}</td>`;
          data += `<td>${regi[2]} </td>`;
          data += `<td>${regi[3].replace(")", "")} </td>`;
          data +=
            '<td><button type="button" onclick="eliminarRegistro(' +
            regi[0].replace("(", "") +
            ')" class="btn btn-primary btn-sm">Eliminar</button> </td>';
          data += "</tr>";
        }
        lista.innerHTML = data;
      });
    };

    let eliminarRegistro = (idP) => {
      data = {
        id: idP,
      };
      axios
        .delete("http://localhost:3000/registros", { data })
        .then((response) => {
          console.log("delete");
          console.log(response);
          consultar();
        });
      alert("Registrado eliminado");
    };

    consultar();