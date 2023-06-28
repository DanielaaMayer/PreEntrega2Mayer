const tracks = []

const tracksTechHouse = (array, elemento) =>{
    return array.indexOf(elemento)
} 

const comprarTrack = (producto) => {

}

const loopCompra = () => {
    let decidoAgregar = confirm ("¿Desea agregar otro track a la lista de descargas?")
    while (decidoAgregar){
        let prod = prompt ("Nombre del track")
        agregarProductos(prod)
        decidoAgregar = confirm ("¿Desea agregar otro track a la lista de descargas?")
    }
}