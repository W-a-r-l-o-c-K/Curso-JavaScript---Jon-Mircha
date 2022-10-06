/* **********     Curso JavaScript: 90. DOM: Ejercicios Prácticos | Responsive con JavaScript - #jonmircha     ********** */

const d = document,
  w = window;

export default function responsiveMedia(id, mediaquery, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mediaquery);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }

    //console.log("MediaQuery: ",breakpoint, e.matches);
  };

  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
