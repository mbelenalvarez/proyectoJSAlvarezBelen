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
            <button id="decrementar-${producto.id}" class="button">-</button>
            <button id="${producto.id}" class="btn">Agregá al carrito</button>
				    <button id="incrementar-${producto.id}" class="button">+</button>
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
    // Agrego evento al botón decrementar.
    const decrementar = document.getElementById(`decrementar-${producto.id}`);
    decrementar.addEventListener("click", () => {
      decrementarProducto(producto.id);
    });
    // Agrego evento al botón incrementar.
    const incrementar = document.getElementById(`incrementar-${producto.id}`);
    incrementar.addEventListener("click", () => {
      incrementarProducto(producto.id);
    });
  } catch (error) {
    console.error(error);
  }
};

// Llamar a la función traerProductos para obtener y mostrar los productos
traerProductos();

localStorage.setItem("productos", JSON.stringify(productos));
let misProductos = JSON.parse(localStorage.getItem("productos"));

const decrementarProducto = (id) => {
  const producto = carrito.find((prod) => prod.id === id);
  if (producto.cantidad === 1) {
    eliminarProducto(producto.id);
  } else {
    producto.cantidad--;
  }
};
const incrementarProducto = (id) => {
  const producto = carrito.find((prod) => prod.id === id);
  producto.cantidad++;
};

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
  let costoFinal = costoTotal(carrito);
  descuento = calcularDescuento(carrito.length, costoFinal);
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
  carrito.forEach((el) => {
    const { nombre, precio, cantidad } = el;
    let item = document.createElement("div");
    item.innerHTML = `
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">${el.nombre}</th>
        <th scope="col">${el.precio}</th>
        <th scope="col">${el.cantidad}</th>
        <button id="eliminar-${el.id}" class="elminar">Eliminar</button>
      </tr>
    </thead>
    <tbody id="tableBody"></tbody>
  </table>
            `;
    miCarrito.appendChild(item);

    // Eliminar productos del carrito
    const eliminar = document.getElementById(`eliminar-${el.id}`);
    eliminar.addEventListener("click", () => {
      const id = el.id;
      Swal.fire({
        title: "¿Querés eliminar el producto de tu carrito",
        showCancelButton: true,
        confirmButtonColor: "#3085D6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalo",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado", "El producto ha sido eliminado");
          const productoABorrar = carrito.find((p) => p.id == id);
          console.log(productoABorrar);
          if (productoABorrar) {
            const index = carrito.indexOf(productoABorrar);
            carrito.splice(index, 1);
          }
        } else {
          carritoVacio.innerHTML =
            '<p class="empty"> No hay productos en el carrito </p>';
        }
      });
    });
  });
};

const BtnVerCarrito = (ev) => {
  ev.preventDefault();
  carrito.length ? itemsEnCarrito() : carritoVacio();
};

// Agrego eventos al boton "Ver carrito"
const verCarritoBtn = document.getElementById("BtnVerCarrito");
verCarritoBtn.addEventListener("click", (ev) => BtnVerCarrito(ev));
