let descuento = 0;

// Mis productos
const productos = [];

const traerProductos = async () => {
  try {
    const resp = await fetch("../stock.json");
    const data = await resp.json();

    // Procesar y mostrar los productos en el HTML
    const cards = document.getElementById("cards");
    data.forEach((producto) => {
      productos.push(producto);
      cards.innerHTML += `
        <div class="cardS${producto.id}">
          <img src="${producto.img}" class="card-img-top" />
          <div class="card-body">
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="card-text">${producto.descripción}</p>
            <button id="${producto.id}" class="btn">Agregá al carrito</button>
          </div>
        </div>
      `;
    });

    // Botón agregar al carrito
    const boton = document.querySelectorAll(`.btn`);
    boton.forEach((P) => {
      P.addEventListener("click", (e) => {
        agregarCarrito(e.target.id);
      });
    });
  }
    catch (error) {
    console.error(error);
  }
};

// Llamar a la función traerProductos para obtener y mostrar los productos
traerProductos();

localStorage.setItem("productos", JSON.stringify(productos));
let misProductos = JSON.parse(localStorage.getItem("productos"));

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
  let verCarrito = JSON.parse(localStorage.getItem("carrito"));
  console.log("El carrito recuperado del localStorage", { verCarrito });
  let costoFinal = costoTotal(carrito);
  console.log(costoFinal);
  descuento = calcularDescuento(carrito.length, costoFinal);
  console.log(descuento);
}

// Contenido de mi orden
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
      html: `Su orden:\n${orden()}Ha sido generada con éxito. \n`,
      footer: `Precio total de su orden: $${precio.toFixed(
        2
      )} con un descuento de $${descuento}`,
    });
  } else {
    descuento = 0;
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

// Tabla de miCarrito
const miCarrito = document.getElementById("miCarrito");
const carritoVacio = () => {
  miCarrito.innerHTML = ``;
  let sign = document.createElement("h3");
  sign.innerHTML = `No hay elementos en el carrito`;
  miCarrito.appendChild(sign);
};

const itemsEnCarrito = () => {
  miCarrito.innerHTML = ``;
  carrito.forEach((e) => {
    const { nombre, precio, cantidad } = e;
    let item = document.createElement("div");
    item.innerHTML = `
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">${productos.nombre}</th>
        <button id="restar-${productos.id}" class="restar">➖</button>
        <th scope="col">${productos.precio}</th>
        <th scope="col">${productos.cantidad}</th>
      </tr>
    </thead>
    <tbody id="tableBody"></tbody>
  </table> */
            `;
    miCarrito.appendChild(item);
  });
};

const BtnVerCarrito = () => (miCarrito.length ? itemsEnCarrito() : carritoVacio())

// Agrego eventos al boton "Ver carrito"
const verCarritoBtn = document.getElementById("BtnVerCarrito");
verCarritoBtn.addEventListener("click", () => BtnVerCarrito());


  // Restar cantidad de unidades de un producto
  let restar = document.querySelectorAll(".restar");
  for (const boton of restar) {
    boton.addEventListener("click", (e) => {
      const id = e.target.id.split("-")[1];
      Swal.fire({
        title: "¿Querés eliminar el producto de tu carrito",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalo",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado", "El producto ha sido eliminado");
          const productoABorrar = carrito.find (p => p.id == id);
          if (productoABorrar) {const index = carrito.indexOf (productoABorrar)
          carrito.splice (index, 1)
        }} else {
          Swal.fire({
            icon: 'error',
            text: 'El producto no existe en el carrito',
          })
        }
      });
    });
  }

