/* **********     Curso JavaScript: 99. DOM: Ejercicios Prácticos | ScrollSpy con Intersection Observer - #jonmircha     ********** */

const d = document;

export default function scrollSpy() {

  const $sections = d.querySelectorAll("section[data-scroll-spy");

  const cb = (entries) => {
    //console.log ("entries", entries);

    entries.forEach(entry => {
      //console.log("entry", entry);
      const id = entry.target.getAttribute("id");
      //console.log(id);
      if(entry.isIntersecting){
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
      }
    });
  }

  const observer = new IntersectionObserver(cb, {
    //rootMargin: "-350px",
    threshold: [0.45, 0.75],
  });
  //console.log("observer", observer);

  $sections.forEach(el => observer.observe(el));
}
