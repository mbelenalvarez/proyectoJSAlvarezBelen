console.log("Hola bienvenido a mi proyecto");

// Sumando productos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
  }
}

let misProductos = [
  new Producto("creación de noticias", 10000),
  new Producto("diseño de páginas", 50000),
  new Producto("copywriting", 5000),
];

//Empleo de do...while para cargar más productos
misProductos; 
let respuesta = "SI";
do {
  let nombre = prompt("Ingrese el nombre del producto");
  let precio = prompt("Ingrese el precio del producto");
  misProductos.push(new Producto(nombre, precio));
  console.log(
    "--> El producto agregado es",
    nombre + " y su precio es de",
    precio
  );
  respuesta = prompt("¿Quieres seguir añadiendo más productos? SI/NO");
} while (respuesta.toUpperCase() !== "NO");


// Cargamos la lista de productos disponibles en la UI con la lista creada anteriormente
let productosList = document.getElementById("Producto");
Producto.forEach((unProducto) => {
  let item = document.createElement("cardServicio");
  item.innerText = unProducto.nombre.toUpperCase();
  item.value = unProducto.precio;
  productosList.append(item);
});

//Empleo de descuento por compra de más de 2 productos
let descuento = 0;
function calcularDescuento(cantidadProductos, precio) {
  let descuento = 0;
  if (cantidadProductos >= 2) {
    if descuento = precio * 0.1; // 0.10 --> 10/100
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
    return false;
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
