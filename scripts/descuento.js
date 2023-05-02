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