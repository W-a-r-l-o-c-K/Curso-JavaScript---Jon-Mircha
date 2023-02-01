import { ajax } from "../helpers/ajax.js"
import wp_api from "../helpers/wp_api.js";

import { PostCard } from "./PostCard.js";


export async function Router() {
  const d = document,
  w = window,
  $main = d.getElementById("main");

  let {hash} = location;

  $main.innerHTML = null;

  if(!hash || hash === "#/") {
    await ajax({
      url: wp_api.POSTS,
      cbSuccess: (main) => {
        //console.log(main);
        let html = "";
        main.forEach(post => (html += PostCard(post)));
        $main.innerHTML = html;
      }
    });
  } else if (hash.includes ("#/search")){
    $main.innerHTML = "<h2>Sección del Buscador</h2>";
  } else if (hash === "#/contacto"){
    $main.innerHTML = "<h2>Sección de Contacto</h2>";
  } else {
    $main.innerHTML = "<h2>Aquí cargará el contenido del post previamente seleccionado</h2>";
  }

  d.querySelector(".loader").style.display = "none";
}
