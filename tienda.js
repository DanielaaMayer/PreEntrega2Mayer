/* pre entrega 2*/

const productos = []
const carrito = {
    totalDeCompra : 0,
    tracksEnCarrito: [],
    calcularTotal: function(){
        this.totalDeCompra = 0
        for(let i=0; i<this.tracksEnCarrito.lenght; i++){
            this.totalDeCompra+= this.tracksEnCarrito[i].precio
        }
    }
}


class Track {
    constructor (nombre, id, precio){
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}

const crearTrack = (nombre, id, precio)=>{
    productos.push(new Track(nombre, id, precio))
    console.log(productos)
}

const moverTrackACarrito = (trackID, arrayProductos)=>{
    for(let i=0; i<arrayProductos.lenght; i++){
        let trackActual = arrayProductos[i]
        if(trackActual.id === trackID){
            carrito.push(trackActual)
            break;
        }
    } 
}

crearTrack("Innerbloom", 1, 10)
crearTrack("Extassy", 2, 10)
crearTrack("Todo Homem", 3, 10)
crearTrack("Purness", 4, 10)

moverTrackACarrito(1, productos)


fetch('tracks.json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let tracks = data.tracks;
})
    tracks.forEach(function(track) {
        let nombre = track.nombre;
        let precio = track.precio;
        let foto = track.img;
        let productor = track.productor;
        let duracion = track.duracion;
        let sello = track.sello;
})