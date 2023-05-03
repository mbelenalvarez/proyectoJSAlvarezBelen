const formulario = [
  {
    id: 1,
    descripcion: "Completá tu nombre",
    input: "nombre",
  },
  {
    id: 2,
    descripcion: "Completá tu mail",
    input: "mail",
  },
  {
    id: 3,
    descripcion: "Completá tu número de contacto",
    input: "numero",
  },
  {
    id: 4,
    descripcion: "Envía tu mensaje",
    input: "mensaje",
  },
];

const formularioContacto = document.getElementById("formularioContacto");
formulario.forEach((formulario) => {
  formulario.innerHTML += `
  <form action="formularioContacto">
        <fieldset>
          <legend>¡Conozcámonos!</legend>
          <div class="${formulario.id}">
            <label for="${formulario.descripcion}"> </label>
            <input type="text" name="${formulario.input}" />
          </div>
          <div class="input">
            <input type="submit" />
          </div>
        </fieldset>
      </form>
`;
});

/*function limpiarCampos() {
    // Limpiar todos y cada uno de los inputs
    document.getElementById("nombre").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("mensaje").value = "";
  }
  
  function validarFormulario() {
    let errores = [];
    const nombreF = document.getElementById("nombre").value;
  
    const mailF = document.getElementById("mail").value;
  
    const numeroF = document.getElementById("numero").value;
    
    const mensajeF = document.getElementById("mensaje").value;
    return errores;
  }
  
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.setAttribute("class", "needs-validation");
    hideMessage();
}) */

