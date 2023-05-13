console.log("Hola bienvenido a mi proyecto");


let descuento = 0;

// Mis productos
const productos = [
  {
    id: 1,
    img: "../multimedia/noticia.png",
    nombre: "Creación de noticias",
    descripción: "Redacción de contenido periodístico",
    cantidad: 10,
    precio: 10000,
  },
  {
    id: 2,
    img: "../multimedia/diseño.png",
    nombre: "Diseño de páginas",
    descripción: "Boceto e implementación de páginas web o UX/UI",
    cantidad: 5,
    precio: 5000,
  },
  {
    id: 3,
    img: "../multimedia/copy.png",
    nombre: "Copywriting",
    descripción: "Escritura de contenido para tus redes sociales",
    cantidad: 10,
    precio: 5000,
  },
];

const cards = document.getElementById("cards");
productos.forEach((productos) => {
  cards.innerHTML += `
<div class="cardS${productos.id}"> <img
src="${productos.img}"
class="card-img-top"
/>
<div class="card-body">
<h4 class="card-title">${productos.nombre}</h4>
<p class="card-text">${productos.descripción}</p>
<button id=${productos.cantidad} class="restar"> ➖ </button> 
<button id=${productos.id} class="btn"> Agregá al carrito </button>
<button id=${productos.id} class="sumar"> ➕ </button>
</div>
</div>
`;
});

console.log("Mis productos son", productos);
console.log("Los datos de los productos antes de almacenarse", {
  productos,
});
localStorage.setItem("productos", JSON.stringify(productos));
let misProductos = JSON.parse (localStorage.getItem("productos"));
console.log("Los productos recuperados del localStorage", {misProductos});

// Botón agregar al carrito
const boton = document.querySelectorAll(`.btn`);
boton.forEach((P) => {
  P.addEventListener("click", (e) => {
    agregarCarrito(e.target.id);
  })
  });

const carrito = [];

// Método find para hallar un producto dentro de la colección
function agregarCarrito(id) {
  let productoBuscado = productos.find(
    (productos) => productos.id == parseInt(id)
  );
  carrito.push(productoBuscado);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
    Toastify({
      text: `${productoBuscado.nombre} agregado con éxito`,
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  let verCarrito = JSON.parse (localStorage.getItem("carrito"));
  console.log("El carrito recuperado del localStorage", {verCarrito});
  let costoFinal = costoTotal(carrito);
  console.log(costoFinal);
  descuento = calcularDescuento(carrito.length, costoFinal);
  console.log(descuento);
}

let carritoContent = document.createElement("div");

// Restar cantidad de unidades de un producto 
for (const boton of restar) {
  boton.addEventListener("click", () => {
      if (productos.cantidad !== 1) {
          productos[0].cantidad--;
      };
      Swal.fire({
        title: '¿Querés eliminar el producto de tu carrito',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado',
            'El producto ha sido eliminado',
          )
        }
      })
  }); };

// Sumar cantidad de unidades de un producto 
for (const boton of sumar) {
  boton.addEventListener("click", () => {
      productos[0].cantidad++;
  }); };


const orden = () => {
  let message = "";
  carrito.forEach((e) => {
    const { nombre, precio } = e;
    message += `<p> ${nombre} - $${precio}</p>`;
  });
  return message;
}; 

//Empleo de descuento por compra de más de 2 productos

function calcularDescuento(cantidadProductos, precio) {
  if (cantidadProductos >= 2) {
    let descuento = precio * 0.1; // 0.10 --> 10/100
    Swal.fire({
      icon: "success",
      title: "¡Genial!",
      html: `Su orden:\n${orden ()}Ha sido generada con éxito. \n`,
      footer: `Precio total de su orden: $${precio.toFixed(2)} con un descuento de $${descuento}`,
    });
  } else {
    descuento = 0
    return descuento;
  }  
}

function costoTotal(productos) {
  let total = 0;
  for (const unProducto of productos) {
    total += unProducto.precio;
  }
  return total; 
}