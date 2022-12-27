const pedidos = JSON.parse( localStorage.getItem('pedidoUsuario') ) || []

const ItemUnico = (arr) => {
    arr.forEach(element => {
        let {marca, precio, id, img, descuento, thumnail1, thumnail2, thumnail3, thumnail4, descripcionProducto,} = element
        main.innerHTML += `
        <section class="container">
        <div class="d-flex">
          <div class="container productcontainer">
            <img class="onlyproduct" src="${img}" alt="">
      
            <img src="${thumnail1}" alt="" class="onlyproductsecondary">
            <img src="${thumnail2}" alt="" class="onlyproductsecondary">
            <img src="${thumnail3}" alt="" class="onlyproductsecondary">
            <img src="${thumnail4}" alt="" class="onlyproductsecondary">
          </div>
          <div>
            <div>
              <h3 class="marca">${marca}</h2>
              <h2 class="nameonlyproduct"><strong>${id}</strong></h2>
              <p>${descripcionProducto}</p> 
            </div>
        
    
              <div class="pagandomenos">
                <h3 class="precio">
                  <strong>${precio}</strong>
                </h3>
                <div class="descuento">
                  <p>${descuento}</p>
                </div>  
              </div>
              <div class="antiguoPrecio">
                <p>$250.00</p>
              </div>
    
            <div>
              <div class="cantidaditemcontainer">
                <div class="btn-group btn-group-sm cantidaditemcontainer1" role="group" aria-label="Large button group">
                  <button type="button" class="btn btn-outline-primary">-</button>
                  <span class="btn btn-outline-primary">${n}</span>
                  <button type="button" class="btn btn-outline-primary">+</button>
                </div>
                <button id=${id} class="btn btn-primary carrito"><img src="images/icon-cart.svg" alt="carrito"
                class="carritosvg">Añadir al carrito</button>
              </div>
            </div>
        </div>
      </section> 
        
        `
    });
}