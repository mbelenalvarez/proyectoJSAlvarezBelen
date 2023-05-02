console.log("Hola bienvenido a mi proyecto");

// Mis productos
class Producto {
  constructor(id, nombre, precio) {
    this.id = parseFloat(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
  }
}

const misProductos = [
  new Producto(1, "creación de noticias", 10000),
  new Producto(2, "diseño de páginas", 50000),
  new Producto(3, "copywriting", 5000),
];

console.log("Mis productos son", misProductos);

const productos = [
  {
    id: 1,
    img: "../multimedia/noticia.png",
    nombre: "Creación de noticias",
    descripción: "Redacción de contenido periodístico",
  },
  {
    id: 2,
    img: "../multimedia/diseño.png",
    nombre: "Diseño de páginas",
    descripción: "Boceto e implementación de páginas web o UX/UI",
  },
  {
    id: 3,
    img: "../multimedia/copy.png",
    nombre: "Copywriting",
    descripción: "Escritura de contenido para tus redes sociales",
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
<button class="btn"> Agregá al carrito </button>
</div>
</div>
`;
});

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
  let productoBuscado = misProductos.find(
    (productos) => productos.nombre === Producto
  );
  carrito.push(productoBuscado);
  console.log(carrito);
}
