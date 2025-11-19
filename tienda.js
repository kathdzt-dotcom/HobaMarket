// Carrito en memoria
let carrito = [];

// Elementos
const btnCarrito = document.getElementById("ver-carrito");
const modal = document.getElementById("carrito-modal");
const cerrarModal = document.getElementById("cerrar-modal");
const itemsDiv = document.getElementById("carrito-items");
const totalDiv = document.getElementById("carrito-total");
const vaciarBtn = document.getElementById("vaciar-carrito");
const enviarBtn = document.getElementById("enviar-whatsapp");

// Abrir modal
btnCarrito.addEventListener("click", () => {
  modal.classList.remove("hidden");
  actualizarCarrito();
});

// Cerrar modal
cerrarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Botones "Agregar al carrito"
document.querySelectorAll(".agregar-carrito").forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const precio = parseFloat(boton.dataset.precio);

    carrito.push({ nombre, precio });
    btnCarrito.textContent = `Carrito (${carrito.length})`;

    alert("Producto agregado 🎀");
  });
});

// Vaciar carrito
vaciarBtn.addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
  btnCarrito.textContent = "Carrito (0)";
});

// Enviar por WhatsApp
enviarBtn.addEventListener("click", () => {
  if (carrito.length === 0) return alert("Tu carrito está vacío");

  let mensaje = "Hola! Me gustaría hacer este pedido:%0A%0A";
  carrito.forEach(p => {
    mensaje += `• ${p.nombre} - $${p.precio}%0A`;
  });

  const total = carrito.reduce((s, p) => s + p.precio, 0);
  mensaje += `%0ATotal: $${total}`;

  window.open(`https://wa.me/5210000000000?text=${mensaje}`);
});

// Actualizar modal
function actualizarCarrito() {
  itemsDiv.innerHTML = "";
  
  carrito.forEach(p => {
    itemsDiv.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
  });

  const total = carrito.reduce((s, p) => s + p.precio, 0);
  totalDiv.textContent = "Total: $" + total;
}
