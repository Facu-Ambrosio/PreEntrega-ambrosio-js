const productos = [
      { nombre: "15 Dias Mas", precio: 9000, cantidad: 1 },
      { nombre: "Muerte Roja", precio: 15000, cantidad: 1 },
      { nombre: "Demonios Internos", precio: 9000, cantidad: 1 },
      { nombre: "Vampire Batman", precio: 15000, cantidad: 1 },
      { nombre: "The Hand", precio: 9000, cantidad: 1 },
      { nombre: "Pizza y Alcohol en Gel", precio: 15000, cantidad: 1 },
      { nombre: "Principe Prospero", precio: 9000, cantidad: 1 },
      { nombre: "The Old Men", precio: 5000, cantidad: 1 },
]
const agregarCarrito = (e) => {
      let dibujo = e.target.id; //id del dibujo
      let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
      if (carritoStorage == null) {
            let carrito = [];
            carrito.push(productos.find((el) => el.nombre === dibujo));
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert(`Usted agrego ${carrito.find((el) => el.nombre === dibujo).cantidad} dibujo/s  de "${dibujo}" a su carrito`)
      } else if (carritoStorage.some((el) => el.nombre === dibujo) === false) {
            carritoStorage.push(productos.find((el) => el.nombre === dibujo));
            localStorage.setItem("carrito", JSON.stringify(carritoStorage));
            alert(`Usted agrego ${carritoStorage.find((el) => el.nombre === dibujo).cantidad} dibujo/s  de "${dibujo}" a su carrito`)
      } else {
            carritoStorage.find((el) => el.nombre === dibujo).cantidad += 1;
            localStorage.setItem("carrito", JSON.stringify(carritoStorage));
            alert(`Usted agrego ${carritoStorage.find((el) => el.nombre === dibujo).cantidad} dibujo/s  de "${dibujo}" a su carrito`)
      }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let mainCatalogo = document.getElementById("mainCatalogo");

let boton = mainCatalogo.querySelectorAll("button");

for (let i of boton) {
      i.addEventListener("click", agregarCarrito);
}
