const tracks = []

const tracksTechHouse = (array, elemento) =>{
    return array.indexOf(elemento)
} 

const comprarTrack = (producto) => {
    const existeEnArray = evaluadorDeExistencia (productos, producto)
    if(existeEnArray===-1){
        productos.push(producto)
    }else {
        console.warn("Ese track ya fue descargado")
    }
}

const loopCompra = () => {
    let decidoAgregar = confirm ("¿Desea agregar otro track a la lista de descargas?")
    while (decidoAgregar){
        let prod = prompt ("Nombre del track")
        agregarProductos(prod)
        decidoAgregar = confirm ("¿Desea agregar otro track a la lista de descargas?")
    }
}