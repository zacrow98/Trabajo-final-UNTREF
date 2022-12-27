const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


const deck = document.querySelector('#decks')

const collection = [
    {
        id: '1',
        marca: 'Sneaker Company',
        producto: 'Fall limited Edition sneackers',
        img: 'images/image-product-1.jpg',
        precio: '125.00',
        antiguoPrecio: '250.00',
    },
    {
        id: '2',
        marca: 'Sneaker Company',
        producto: 'Fall limited Edition sneackers',
        img: 'images/image-product-1.jpg',
        precio: '125.00',
        antiguoPrecio: '250.00',
    },
    {
        id: '3',
        marca: 'Sneaker Company',
        producto: 'Fall limited Edition sneackers',
        img: 'images/image-product-1.jpg',
        precio: '125.00',
        antiguoPrecio: '250.00',
    },
    {
        id: '4',
        marca: 'Sneaker Company',
        producto: 'Fall limited Edition sneackers',
        img: 'images/image-product-1.jpg',
        precio: '125.00',
        antiguoPrecio: '250.00',
    },
]

const pedidos = JSON.parse( localStorage.getItem('pedidoUsuario') ) || []

const html = (arr) => {
    arr.forEach(element => {
        let {id, marca, producto, img, precio, antiguoPrecio} = element
        deck.innerHTML += `
                <section>
                    <div class="card shadow" style="width: 16rem;">
                        <div class="card-body">
                            <img class="card-img" src="${img}" alt="producto">
                            <h5 class="marca">${marca}</h5>
                            <h3 class="nameonlyproduct1"><strong>${producto}</strong></h3>
                            <div class="pagandomenos">
                                <h3 class="precio">
                                    <strong>${precio}</strong>
                                </h3>
                                <div class="descuento">
                                    <p>50%</p>
                                </div>
                            </div>
                            <div class="antiguoPrecio1">
                                <p>$${antiguoPrecio}</p>
                            </div>
                            <button id=${id} class="btn btn-primary carrito"><img src="images/icon-cart.svg" alt="carrito"
                                    class="carritosvg">Añadir al carrito</button>
                        </div>
                    </div>
                </section>
            `
    });
}

const solicitarPedido = () => {
    let botones = document.querySelectorAll('.btn')
    console.log(botones);
    for (const btn of botones) {
        btn.addEventListener('click', (evento) => {
            console.log(evento.target.id);
            let resultado = collection.find( el => el.id == evento.target.id)
            console.log(resultado);
            if (resultado == undefined) {
                alert('ocurrio un error')
            }else{
                pedidos.push(resultado)
                localStorage.setItem('pedidoUsuario',JSON.stringify(pedidos))
                console.log(pedidos);
            }
        })
    }
}



html(collection)

solicitarPedido()