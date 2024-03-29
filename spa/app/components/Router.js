import { ajax } from "../helpers/ajax.js"
import wp_api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";


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
    console.log(wp_api.POST);
  } else if (hash.includes ("#/search")){
    //$main.innerHTML = "<h2>Sección del Buscador</h2>";
    let query= localStorage.getItem("wpSearch");

    if(!query) {
      d.querySelector(".loader").style.display = "none";
      return false
    };

    await ajax({
      url:`${wp_api.SEARCH}${query}`,
      cbSuccess: (search) => {
        //console.log(search);
        let html = "";
        if(search.length === 0){
          html = `
            <p class="error">
            No existen resultados de búsqueda para el término
            <mark>${query}</mark>.
            </p>
          `;
        } else {
          search.forEach(post => html += (SearchCard(post)));
        }

        $main.innerHTML = html;
      }
    });

  } else if (hash === "#/contacto"){
    $main.appendChild(ContactForm());
  } else {
    await ajax({
      url: `${wp_api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
       //console.log(post);
        $main.innerHTML = Post(post);
      }
    });
  }

  d.querySelector(".loader").style.display = "none";
}
