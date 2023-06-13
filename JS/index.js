const carrito = []
console.log(carrito)
class Compra {
    constructor(carritoArticulos) {
        this.carrito = carritoArticulos
    }
    despedida(){
        if (this.carrito.length > 0) {
            return alert("¡Muchas gracias por tu compra!")
        }
    }
}
const articulos = [{prenda: '👗', codigo: 1, nombre: 'Vestido', precio: 10000},
                   {prenda: '👚', codigo: 2, nombre: 'Remera', precio: 9000},
                   {prenda: '👖', codigo: 3, nombre: 'Pantalon', precio: 18000},
                   {prenda: '🧥', codigo: 4, nombre: 'Campera', precio: 25000},
                   {prenda: '👙', codigo: 5, nombre: 'Bikini', precio: 15000}]


                   
function buscarArticulos(codigo) {
    let resultado = articulos.find((prenda)=> prenda.codigo === parseInt(codigo) )
    return resultado 
}


function realizarCompra() {
    let codigo = prompt("Ingresa el código de tu prenda de interés: (1, 2, 3, 4, 5)")
    let articuloElegido = buscarArticulos(codigo)
    if (articuloElegido !== undefined) {
        carrito.push(articuloElegido)
        let confirme = confirm('Usted eligio ' + articuloElegido.nombre)
        if (confirme === true){
            calcularInteres()
        }
    } 
    else {
        alert('Ingrese una opcion valida')
        realizarCompra()
    }
}

function buscarPrecios(precio) {
    let resultado = articulos.find((prenda)=> prenda.precio === parseInt(precio) )
    return resultado 
}

function calcularInteres(){
    let precio = parseInt(prompt('Poner precio de tu prenda: (10000, 9000, 18000, 25000, 15000)'))
    let precioElegido = buscarPrecios(precio)
    if(precioElegido !== undefined) {
        let interes = precioElegido.precio * 0.1
        let resultado = (precio + interes)/3
        return confirm('Son $ ' + resultado + ' en 3 cuotas')
    }   
    alert('Por favor elija un precio valido')
    calcularInteres()
}

function concluirCompra() {
    let concluir = new Compra(carrito)
    concluir.despedida()
 }


realizarCompra()
concluirCompra()