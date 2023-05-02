const formulario = document.getElementById("formularioContacto");

function limpiarCampos() {
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
})
