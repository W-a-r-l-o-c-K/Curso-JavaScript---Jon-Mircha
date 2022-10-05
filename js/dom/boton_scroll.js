/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */

const d = document,
w = window;

export default function  scrollTopButton(btn) {
  const $scollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 800) {
      $scollBtn.classList.remove("hidden");
    } else {
      $scollBtn.classList.add("hidden");
    }

    // console.log(w.pageYOffset, d.documentElement.scrollTop);
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        //left: 0,
      });
    }

  });
}
