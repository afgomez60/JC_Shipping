
const botones = document.querySelectorAll('.nav-btn');
const paginas = document.querySelectorAll('.page');


function mostrarPagina(idPagina) {

  paginas.forEach((pagina) => {
    pagina.classList.add('hidden');
  });


  const paginaActiva = document.getElementById(idPagina);
  paginaActiva.classList.remove('hidden');


  botones.forEach((boton) => {
    boton.classList.remove('active');
    if (boton.dataset.page === idPagina) {
      boton.classList.add('active');
    }
  });
}


botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const destino = boton.dataset.page; 
    mostrarPagina(destino);
  });
});


const horaCarga = document.getElementById('hora-carga');
horaCarga.textContent = new Date().toLocaleTimeString();


let clicsAcerca = 0;
const contadorClics = document.getElementById('contador-clics');

// CORRECCIÓN: Se cambió "acerca" por "nosotros" para que coincida con el HTML
const botonAcerca = document.querySelector('[data-page="nosotros"]');

botonAcerca.addEventListener('click', () => {
  clicsAcerca++;
  contadorClics.textContent = clicsAcerca;
});