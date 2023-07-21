/* pre entrega 2*/

const listaDeTracks = []
const carrito = {
    totalDeCompra: 0,
    tracksEnCarrito: [],
    calcularTotal: function () {
        this.totalDeCompra = 0
        console.log(this.tracksEnCarrito)
        for (let i = 0; i < this.tracksEnCarrito.length; i++) {
            this.totalDeCompra += this.tracksEnCarrito[i].precio
        }
    }
}


class Track {
    constructor(nombre, id, precio, img, productor, duracion, sello, stock) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.img = img
        this.productor = productor
        this.duracion = duracion
        this.sello = sello
        this.stock = stock
    }
}

const crearTrack = (nombre, id, precio, img, productor, duracion, sello, stock) => {
    listaDeTracks.push(new Track(nombre, id, precio, img, productor, duracion, sello, stock))
    console.log("Agrego Track al array listaDeTracks:")
    console.log(listaDeTracks)
}

const moverTrackACarrito = (trackID, arrayProductos) => {
    for (let i = 0; i < arrayProductos.length; i++) {
        let trackActual = arrayProductos[i]
        if (trackActual.id === trackID) {
            carrito.tracksEnCarrito.push(trackActual)
            break;
        }
    }
}

const agregarTrack = (id) => {
    let detalle = document.getElementById("mostrar-detalle");
    if (id == 1) {
        track = new Track("Innerbloom", id, 10)
        carrito.tracksEnCarrito.push(track)
        carrito.calcularTotal()
        let elemento = document.createElement("li")
        elemento.textContent = "Track " + track.id + ": " + track.nombre + " - $" + track.precio
        detalle.appendChild(elemento)
    }
    if (id == 2) {
        track = new Track("Extassy", id, 10)
        carrito.tracksEnCarrito.push(track)
        carrito.calcularTotal()
        let elemento = document.createElement("li")
        elemento.textContent = "Track " + track.id + ": " + track.nombre + " - $" + track.precio
        detalle.appendChild(elemento)
    }
    if (id == 3) {
        track = new Track("Todo Homem", id, 10)
        carrito.tracksEnCarrito.push(track)
        carrito.calcularTotal()
        let elemento = document.createElement("li")
        elemento.textContent = "Track " + track.id + ": " + track.nombre + " - $" + track.precio
        detalle.appendChild(elemento)
    }
    if (id == 4) {
        track = new Track("Purness", id, 10)
        carrito.tracksEnCarrito.push(track)
        carrito.calcularTotal()
        let elemento = document.createElement("li")
        elemento.textContent = "Track " + track.id + ": " + track.nombre + " - $" + track.precio
        detalle.appendChild(elemento)
    }

    let total = document.getElementById("mostrar-total");
    total.innerHTML = "Total: $" + carrito.totalDeCompra
}

const quitarTrack = (id) => {
    console.log(carrito.tracksEnCarrito)
    for (let i = 0; i <= carrito.tracksEnCarrito.length; i++) {
        if (carrito.tracksEnCarrito[i].id == id) {
            console.log("Track a eliminar: " + listaDeTracks[i].nombre)
            carrito.tracksEnCarrito.splice(i, 1)
            console.log("Elemento eliminado")
            carrito.calcularTotal()
            console.log("Array actualizado")
            console.log(carrito)
        }
    }
}

const confirmarCompra = () => {
    carrito.calcularTotal()
    console.log("Total: $" + carrito.totalDeCompra)
    console.log("Detalle:")
    console.log("Item 1: " + carrito.tracksEnCarrito[0].nombre)
    console.log("Item 2: " + carrito.tracksEnCarrito[1].nombre)
    console.log("Item 3: " + carrito.tracksEnCarrito[2].nombre)

    console.log(carrito)
    let detalle = document.getElementById("mostrar-detalle");
    for (let i = 0; i < carrito.tracksEnCarrito.length; i++) {
        let elemento = document.createElement("li")
        elemento.textContent = "Track " + i + ": " + carrito.tracksEnCarrito[i].nombre + " - $" +carrito.tracksEnCarrito[i].precio
        detalle.appendChild(elemento)
    }
    let total = document.getElementById("mostrar-total");
    total.innerHTML = "Total: $" + carrito.totalDeCompra
}

//comentario una sola línea de código esto en JavaScript
/*
comentario de multilínea esto en JavaScript
*/

fetch('../tracks.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let tracks = data.tracks;
        tracks.forEach(function (track) {
            let nombre = track.nombre;
            let precio = track.precio;
            let foto = track.img;
            let productor = track.productor;
            let duracion = track.duracion;
            let sello = track.sello;
            let stock = track.stock

            crearTrack(nombre, track.id, precio, foto, productor, duracion, sello, stock)
        })
        let tabla = document.getElementById("tabla")
        let tbody = tabla.querySelector("tbody");
        listaDeTracks.forEach(function (track) {
            let fila = document.createElement("tr")
            let id = document.createElement("td")
            id.textContent = track.id
            fila.appendChild(id)
            let nombre = document.createElement("td")
            nombre.textContent = track.nombre
            fila.appendChild(nombre)
            let precio = document.createElement("td")
            precio.textContent = track.precio
            fila.appendChild(precio)
            let stock = document.createElement("td")
            stock.textContent = track.stock
            fila.appendChild(stock)
            let foto = document.createElement("td")
            let img = document.createElement("img")
            img.src = track.img
            foto.appendChild(img)
            fila.appendChild(foto)
            let botonAgregar = document.createElement("td");
            let confirmarBtnAgregar = document.createElement("button");
            confirmarBtnAgregar.textContent = "Agregar al carrito";
            confirmarBtnAgregar.addEventListener("click", function () {
                agregarTrack(track.id);
            });
            botonAgregar.appendChild(confirmarBtnAgregar);
            fila.appendChild(botonAgregar);
            let botonQuitar = document.createElement("td");
            let confirmarBtnEliminar = document.createElement("button");
            confirmarBtnEliminar.textContent = "Eliminar del carrito";
            confirmarBtnEliminar.addEventListener("click", function () {
                quitarTrack(track.id);
            });
            botonQuitar.appendChild(confirmarBtnEliminar);
            fila.appendChild(botonQuitar);

            tbody.appendChild(fila);
        })
    })
