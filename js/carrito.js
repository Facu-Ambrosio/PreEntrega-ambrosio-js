const armadoCarrito = (carrito, mainCarrito) => {
      for (let dibujo of carrito) {
            let fila = document.createElement("section");
            fila.classList.add("container", "sectionCarrito");
            fila.innerHTML = `
            <div class="row align-items-center">
                  <div class="col-1">
                        <img class="imagenCarrito" src="../Assets/Galeria/reescaladas/${dibujo.nombre}.jpg" alt="">
                  </div>
                  <div class="col-7">
                        ${dibujo.nombre} (x ${dibujo.cantidad})
                  </div>
                  <div class="col-2">
                        precio:  $${dibujo.precio * dibujo.cantidad}
                  </div>
                  <div class="col-2">
                        <button type="button" class="btn btn-danger" id = "${dibujo.nombre}">Sacar del carrito</button>
                  </div>
            </div>
            `;
            mainCarrito.appendChild(fila);
      }
}
const sacarCarrito = (e) => {
      let nombre = e.target.id;
      let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
      localStorage.clear();
      let elementoASacar = carritoStorage.find((e) => e.nombre === nombre).nombre; //objeto a sacar 
      let carritoNuevo = carritoStorage.filter((el) => el.nombre !== elementoASacar);
      localStorage.setItem("carrito", JSON.stringify(carritoNuevo));
      alert(`Acaba de sacar el/los dibujo/s "${nombre}" del carrito, recargue la pagina`)
}
// -------------------------------------------
let mainCarrito = document.getElementById("mainCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito"));

let sacar = document.getElementsByTagName("button");

armadoCarrito(carrito, mainCarrito); //funcion que arma la estructura HTML del carrito

for (let botones of sacar) {
      botones.addEventListener("click", sacarCarrito);
}




