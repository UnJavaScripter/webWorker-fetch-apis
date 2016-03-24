'use strict';

// Se instancia llamándo al archivo en donde está el código del web worker.
//   No es necesario llarmar al archivo web_worker.js desde index.html
const elWebWorker = new Worker('web_worker.js');

// Enviamos un mensaje al worker, en este caso un string con una url
//   para que haga un llamado HTTP
elWebWorker.postMessage('./data.json');

// Creamos un listener para escuchar cuando el worker nos envíe un mensaje de vuelta
elWebWorker.onmessage = function(e) {
  console.info('El web worker manda a decir que en ese archivo hay: ', e.data);
}

// Logs a consola que demuestran la asincronía de la aplicación.

// Para información acerca de estilos en logs de consola:
//    https://developer.chrome.com/devtools/docs/console#styling-console-output-with-css
console.info('%c Console.info declarado después de enviar un mensaje al worker', 'background: #444; color: #bada55');
console.info('%c Esto muestra que todo se maneja de forma asíncrona.', 'color: aqua');
