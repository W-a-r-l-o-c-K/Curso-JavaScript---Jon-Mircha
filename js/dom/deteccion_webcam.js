/* **********     Curso JavaScript: 94. DOM: Ejercicios Prácticos | Detección de la WebCam - #jonmircha     ********** */

const d = document,
      n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);
  //console.log(n.mediaDevices.getUserMedia);

  if(n.mediaDevices.getUserMedia) {
    n.mediaDevices.getUserMedia({video:true, audio:false})
    .then((stream) => {
      console.log(stream);
      $video.srcObject = stream;
      $video.onplay();
    })
    .catch((err) => {
      $video.insertAdjacentHTML("beforebegin", `<p><b>¡Sucedió el siguiente error!: </b><mark>${err}</mark></p>`);
      console.log(`¡Sucedió el siguiente error!: ${err}`)
    });
  }
}
