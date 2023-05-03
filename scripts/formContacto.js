const formularioContacto = document.getElementById("formularioContacto");
const mensaje = document.getElementById("mensajeFinal");

let consultas = []

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

    const consulta = {
      nombre: nombreF,
      mail: mailF,
      numero: numeroF,
      mensaje: mensajeF
    }
    consultas.push(consulta)

    localStorage.setItem("formulario contacto", JSON.stringify(consultas));
    console.log(consulta);
    return errores;
  }
  
  let formContacto = JSON.parse (localStorage.getItem("formulario contacto"));

  function hideMessage() {
    console.log("Tu consulta ha sido enviada");
  }

  formularioContacto.addEventListener("submit", (event) => {
    event.preventDefault();
    validarFormulario();
    event.target.setAttribute("class", "needs-validation");
    mensaje.innerText = "Tu consulta ha sido enviada"
    hideMessage();
}) 


