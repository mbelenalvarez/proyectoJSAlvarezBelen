console.log("Hola bienvenido a mi proyecto");

// Mis productos
class Producto {
  constructor(id, nombre, precio) {
    this.id = parseFloat(id)
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

const contenedorProductos 

// Cargamos la lista de productos disponibles en la UI con la lista creada anteriormente
let productosList = document.getElementById("Producto");
Producto.forEach((unProducto) => {
  let item = document.createElement("cardServicio");
  item.value = unProducto.id; 
  item.innerText = unProducto.nombre.toUpperCase();
  item.value = unProducto.precio;
  productosList.append(item);
});

//Empleo de descuento por compra de más de 2 productos
let descuento = 0;
function calcularDescuento(cantidadProductos, precio) {
  if (cantidadProductos >= 2) {
    precio * 0.1; // 0.10 --> 10/100
  } else {
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

// Buscamos el producto y evaluamos si existe o no
let unProducto = buscarProducto(parseInt(nombre));
  if (!unProducto) {
    // informar de error
    showErrorMessage(["No se encuentra el producto seleccionado"]);
  }
