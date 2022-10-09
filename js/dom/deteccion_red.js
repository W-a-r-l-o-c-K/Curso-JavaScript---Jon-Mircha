/* **********     Curso JavaScript: 93. DOM: Ejercicios Prácticos | Detección del estado de la red - #jonmircha     ********** */

const d = document,
      w =  window,
      n = navigator;

export default function  netWorkStatus() {
  const isOnline = () => {
    const $div = d.createElement("div");

    if (n.onLine) {
      $div.textContent = "Conexión restablecida.";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = ("Conexión perdida.");
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => d.body.removeChild($div), 2500);
  };
  w.addEventListener("online", e => isOnline());
  w.addEventListener("offline", e => isOnline());
}
