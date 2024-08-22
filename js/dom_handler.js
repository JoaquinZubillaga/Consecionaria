let container = document.querySelector("#container")
let lista_carrito = document.getElementById("carritop");
let template = document.querySelector('template')



fetch(js/db.json)


function enderizar_productos(productos) {
    productos.forEach((producto) => {
        
        let copia = document.querySelector("template").content.cloneNode(true)
      
        copia.querySelector('h5').textContent = producto.nombre
        copia.querySelector("p").textContent = producto.precio
        copia.querySelector("img").src = producto.img
        let boton = copia.querySelector("button")
        let mensaje = `Agregaste : ${producto.nombre} al carrito`
      
      
      
      
      
      
        boton.addEventListener("click", () => {
      
          carrito.push(producto);
          actualizarcarrito();
      
      
      
      
      
      
          window.addEventListener('load', () => {
            const carritoGuardado = localStorage.getItem('carrito');
            if (carritoGuardado) {
              carrito = JSON.parse(carritoGuardado);
              actualizarcarrito();
            }
          });
      
      
      
      
          Toastify({
      
            text: mensaje,
      
            duration: 3000
      
          }).showToast();
        })
      
        container.append(copia)
      })
      
}






