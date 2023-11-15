const d = document
const $frente = d.querySelector(".atras")

d.addEventListener("DOMContentLoaded", e=> {

    const objeto = {
        enableHighAccuracy: true,
        timeout:5000,
        maximumAge:0
    }

    const success = (posicion) => {
        console.log(posicion.coords)

        $frente.innerHTML += `
            <p>Numero 1: ${posicion.coords.latitude}</p>
            <p>Numero 2: ${posicion.coords.longitude}</p>
            <p>Numero 3: ${posicion.coords.accuracy}</p>
        `
    }

    const  error = (err) => {
        $frente.innerHTML += `Error ${err.code}: ${err.message}`
    }

    navigator.geolocation.getCurrentPosition(success,error,objeto)
})
