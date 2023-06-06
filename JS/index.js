const carrito = []
console.log(carrito)
class añadir {
    constructor(carritoArticulos) {
        this.carrito = carritoArticulos
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

const talles = ['S', 'M', 'L', 'XL']
function elegirTalle(){
    let talle = prompt('Elija el talle que desee: (S, M, L, XL)')
    for(let i = 0; i < talles.length; i++){
        if (talles[i] == talle)
        return talles[i]
    }
    alert('elija un talle valido')
    elegirTalle()
}

function realizarCompra() {
    let codigo = prompt("Ingresa el código de tu prenda de interés: (1, 2, 3, 4, 5)")
    let talleElegido = elegirTalle()
    let articuloElegido = buscarArticulos(codigo)
    if (articuloElegido !== undefined) {
        carrito.push(articuloElegido)
        let confirme = confirm('Usted eligio ' + articuloElegido.nombre + ' en Talle ' + talleElegido )
        if (confirme === true){
            calcularInteres()
        }
    } 
    else {
        alert('Ingrese una opcion valida')
        realizarCompra()
    }
}


const precios = [10000, 9000, 18000, 25000, 15000]
function calcularInteres(){
    let precio = parseInt(prompt('Poner precio de tu prenda: (10000, 9000, 18000, 25000, 15000)'))
    const recargo = precio * 0.1 
    let resultado = (precio + recargo)/3
    for(let i = 0; i < precios.length; i++){
        if (precios[i] == precio){
        return confirm('Son $ ' + resultado + ' en 3 cuotas')
        }
        else{
        alert('Por favor elija un precio valido')
        calcularInteres()
        }
    }
}

function concluirCompra() {
    const compras = new añadir(carrito)
    alert ('¡Muchas gracias por su compra!')
}


realizarCompra()
concluirCompra()