console.log("Hola bienvenido a mi proyecto");

// Sumando productos
class producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
  }
}

let misProductos = [
  new producto("creación de noticias", 10000),
  new producto("diseño de páginas", 50000),
  new producto("copywriting", 5000),
];

//Empleo de do...while para cargar más productos
misProductos; 
let respuesta = "SI";
do {
  let nombre = prompt("Ingrese el nombre del producto");
  let precio = prompt("Ingrese el precio del producto");
  misProductos.push(new producto(nombre, precio));
  console.log(
    "--> El producto agregado es",
    nombre + " y su precio es de",
    precio
  );
  respuesta = prompt("¿Quieres seguir añadiendo más productos? SI/NO");
} while (respuesta.toUpperCase() !== "NO");

//Empleo de descuento por compra de más de 2 productos
let descuento = 0;
function calcularDescuento(cantidadProductos, precio) {
  let descuento = 0;
  switch (cantidadProductos) {
    case 0: // 0  -->  0%
      descuento = 0;
      break;
    case 1: // 1  -->  0%
      descuento = 0;
      break;
    case 2: // 2  -->  10%
      descuento = precio * 0.1; // 0.10 --> 10/100
      break;
  }
  return descuento;
}

function costoTotal(productos) {
  let total = 0;
  for (const unProducto of productos) {
    total += unProducto.precio;
  }
  return total;
}

let costoFinal = costoTotal(misProductos);
descuento = calcularDescuento(misProductos.length, costoFinal);
costoFinal = costoFinal - descuento;
alert(
  "El usuario deberá abonar un total de $" +
    costoFinal.toFixed(2) +
    " y usted recibió un descuento de $" +
    descuento.toFixed(2) +
    " por la compra de " +
    misProductos.length +
    " productos."
);

// Método find para hallar un elemento dentro de la colección
let buscarNombre = prompt("¿Qué producto quieres buscar?");

let productoBuscado = misProductos.find(
  (unProducto) => unProducto.nombre.toUpperCase() === buscarNombre.toUpperCase()
);

if (productoBuscado !== undefined) {
  alert("Si existe el producto buscado " + productoBuscado.nombre);
} else {
  alert("No encontramos el producto con nombre: " + buscarNombre);
}

// Método filter para filtrar elementos de mi colección

let nombreFiltrado = prompt("¿Por cuál producto quieres filtrar?");

let productosHallados = misProductos.filter((unProducto) =>
  unProducto.nombre.includes(nombreFiltrado.toUpperCase())
);

alert(
  "La cantidad de productos que se hallaron e incluyan en su nombre " +
    nombreFiltrado +
    " son: " +
    productosHallados.length
);
