const armadoCarrito = () => { //funcion que arma la estrucutra html del carrito en el carrito.html
      for (let dibujo of carrito) { //por cada articulo en el carrito del storage
            let fila = document.createElement("section"); //crea una etiqueta section
            fila.classList.add("container", "sectionCarrito"); //a dicha etiquete section le agrega las clases container y sectionCarrito
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
            `; //estructura HTML del carrito
            mainCarrito.appendChild(fila); //se agrega el section nuevo al main de carrito.html
      }
}
const sacarCarrito = (e) => { //funcion que permite sacar articulos del carrito
      let nombre = e.target.id; //se declara una variable que almacena el id del boton que coincide con el nombre del articulo
      let carritoStorage = JSON.parse(localStorage.getItem("carrito")); // se obtiene del storage el carrito
      let elementoASacar = carritoStorage.find((e) => e.nombre === nombre); //objeto a sacar 
      if (elementoASacar) { //si el elemento que se quiere sacar  no se ha sacado antes
            let carritoNuevo = carritoStorage.filter((el) => el.nombre !== nombre); //se crea un carrito nuevo sin incluir el articulo
            localStorage.setItem("carrito", JSON.stringify(carritoNuevo)); //se sube al storage el carrito nuevo
            alert(`Acaba de sacar el/los dibujo/s "${nombre}" del carrito. Recargue la página.`); //aviso al usuario de que saco el articulo del carrito, una vez que se recargue la pagina el articulo desaparecera
      } else { //en caso de que el usuario no recargue la pagina una vez eliminado el articulo, y se vuelva a apretar el boton de sacare del carrito
            alert(`El dibujo "${nombre}" ya se quitó del carrito, recargue la pagina`); //aviso de que ya lo ha sacado del carrito
      }
}
// -------------------------------------------
let mainCarrito = document.getElementById("mainCarrito"); //main del carrito.html

let carrito = JSON.parse(localStorage.getItem("carrito")); //carrito del storage

let sacar = document.getElementsByTagName("button"); //botones para sacar elementos del carrito

armadoCarrito(carrito, mainCarrito); //funcion que arma la estructura HTML del carrito

for (let botones of sacar) { //por cada boton de sacar del carrito en el carrito.html se declara un evento
      botones.addEventListener("click", sacarCarrito); //evento del tipo click y que acciona la funcion sacarCarrito
}




