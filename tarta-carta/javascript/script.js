function cambioIdioma() {
    let imagen = document.getElementById("img-idioma")

    if (imagen.src.includes("espana.png")) {
        imagen.src = "imagenes/idioma/francia.png"
        imagen.alt = "Bandera de Francia"
    } else {
        imagen.src = "imagenes/idioma/espana.png"
        imagen.alt = "Bandera de España"
    }
}

function vueltaTarjeta(event) {
    // Obtener el identificador del elemento asociado al botón
    var targetId = event.target.dataset.target

    //Obtener los elementos que se van a modificar, añadiendo -delante y -detras para diferenciarlos
    let delante = document.getElementById(targetId + "-delante")
    let detras = document.getElementById(targetId + "-detras")

    if (detras.style.display === "none") {
        delante.style.display = "none"
        detras.style.display = "block"
    } else {
        detras.style.display = "none"
        delante.style.display = "block"
    }
}