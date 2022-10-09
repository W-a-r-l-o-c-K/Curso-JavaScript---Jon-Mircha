/* **********     Curso JavaScript: 92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent - #jonmircha     ********** */

const d = document,
      n = navigator,
      ua = n.userAgent;

export default function userDeviceInfo (id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edg/i),
      any: function () {
        return (this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera());
      }
    };
  // console.log(ua);
  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isMobile.any());
  // console.log(isDesktop.any());

  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `
  /* Contenido exclusivo */

  if (isBrowser.chrome() && !isBrowser.edge()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome.</mark></p>`
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Linux/Android.</mark></p>`
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Mac-OS.</mark></p>`
  }
  if (isBrowser.edge()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en Edge.</mark></p>`
  }
  if (isDesktop.linux() && !isMobile.android()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para LINUX.</mark></p>`
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para MAC OS.</mark></p>`
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para WINDOWS.</mark></p>`
  }
  /* Redirecciones */
  // if (isMobile.android()) {
  //   window.location.href = "https://jonmircha.com";
  // }

}
