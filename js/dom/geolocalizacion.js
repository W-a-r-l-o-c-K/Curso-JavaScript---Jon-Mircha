/* **********     Curso JavaScript: 95. DOM: Ejercicios Prácticos | Detección de la Geolocalización - #jonmircha     ********** */

const d = document,
      n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
  options = {
    enebleHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const succes = (position) => {
    let coords = position.coords;
    console.log (position);

    $id.innerHTML = `
    <p>Tu posición actual es:</p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},14z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `
  };

  const error = (error) => {
    $id.innerHTML = `<p><mark>Error: ${error.code}: ${error.message}</mark></p>`
    console.log (`Error: ${error.code}: ${error.message}`);

  };

  n.geolocation.getCurrentPosition(succes,error,options);
}
