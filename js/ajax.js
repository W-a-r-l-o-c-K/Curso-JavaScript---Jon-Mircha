/* **********     Curso JavaScript: 106. AJAX: Objeto XMLHttpRequest - #jonmircha     ********** */
(() => {
  const xhr = new XMLHttpRequest(),  // guardamos en una variable un nuevo objeto XMLHttpRequest
    $xhr = document.getElementById("xhr"),          // guardamos en una variable la lista ordenada
    $fragment = document.createDocumentFragment();  // gardamos en una variable un document fragment

  xhr.addEventListener("readystatechange", (e) => {  // ponemos el XMLHttpRequest a la escucha con readystetechange
    if (xhr.readyState !== 4) return;                // si xhr.readyState es diferente de 4 retorna

    //console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {  // si xhr.status es moyor o igual que 200 y menor de 300:
      //console.log("éxito");
      //console.log(xhr.responseText);
      //$xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);  // guarda en la variable json la respuesta de xhr parseada a JSON
      //console.log(json);

      json.forEach((el) => {                         // por cada elemento de json:
        const $li = document.createElement("li");                   // guarda en $li un nuevo elemento de tipo "li"
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; // añade al $li el innerHTML con elemento.nombre, elemento.email, elemento.phone
        $fragment.appendChild($li); // con el fragmento vamos añadiendo los hijos li
      });

      $xhr.appendChild($fragment);  // añade a xhr el hijo fragment con los li
    } else {
      //console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

    //console.log("Este mensaje cargará de cualquier forma");
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //xhr.open("GET", "assets/users.json");

  xhr.send();
})();

/* **********     Curso JavaScript: 107. AJAX: API Fetch - #jonmircha     ********** */
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //fetch("assets/users.json")
  fetch("https://jsonplaceholder.typicode.com/users")
    /* .then((res) => {
      console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    }) */
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch")
    });
})();

/* **********     Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha     ********** */
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      //console.log(res, json);

      //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      //console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();

/* **********     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha     ********** */
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    //.get("assets/users.json")
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado Axios");
    });
})();

/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha     ********** */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      //console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      //console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();
