console.log("Hola bienvenido a mi proyecto");


let descuento = 0;

// Mis productos
const productos = [
  {
    id: 1,
    img: "../multimedia/noticia.png",
    nombre: "Creación de noticias",
    descripción: "Redacción de contenido periodístico",
    precio: 10000,
  },
  {
    id: 2,
    img: "../multimedia/diseño.png",
    nombre: "Diseño de páginas",
    descripción: "Boceto e implementación de páginas web o UX/UI",
    precio: 5000,
  },
  {
    id: 3,
    img: "../multimedia/copy.png",
    nombre: "Copywriting",
    descripción: "Escritura de contenido para tus redes sociales",
    precio: 5000,
  },
];

console.log(
  "Los productos a seleccionar son " + productos[0].nombre,
  productos[1].nombre,
  productos[2].nombre
);

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
<button id=${productos.id} class="btn"> Agregá al carrito </button>
</div>
</div>
`;
});

console.log("Mis productos son", productos);
console.log("Los datos de los productos antes de almacenarse", {
  productos,
});
localStorage.setItem("productos", JSON.stringify(productos));

// Botón agregar al carrito
const boton = document.querySelectorAll(`.btn`);
boton.forEach((P) => {
  P.addEventListener("click", (e) => {
    agregarCarrito(e.target.id);
  });
  console.log(boton);
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
  let costoFinal = costoTotal(carrito);
  console.log(costoFinal);
  descuento = calcularDescuento(carrito.length, costoFinal);
  console.log(descuento);
}

//Empleo de descuento por compra de más de 2 productos

function calcularDescuento(cantidadProductos, precio) {
  if (cantidadProductos >= 2) {
    let descuento = precio * 0.1; // 0.10 --> 10/100
    console.log (
      "El usuario deberá abonar un total de $" +
        precio.toFixed(2) +
        " y usted recibió un descuento de $" +
        descuento +
        " por la compra de " +
        cantidadProductos +
        " productos."
    ) 
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