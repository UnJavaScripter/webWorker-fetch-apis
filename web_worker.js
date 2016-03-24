"use strict";

// Sobre el uso de self:
//    self === this ---> true
//  Es normal encontrar ejemplos en donde los métodos del web/service worker
//   se adhieren a un objeto no declarado llamado self, esto no es sino otra forma de
//   referenciar "this".
//
//   De hecho el código funcionaría sin problema si quitaramos la referencia a self.  


// Creamos un listener para el worker que esuchará a un llamado externo (desde app.js).
self.onmessage = function(e) {
  // Al recibir un mensaje decimos algo en consola...

  console.log('Alguien me ha llamado y me dice lo siguiente:', e);

  // ...y ejecutamos la función que se encargará de hacer el fetch.
  fetch_stuff(e.data);
}


let fetch_stuff = (url) => {

    // Google Developers ofrece una excelente referencia acerca de fetch
    //  https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en

    // El primer parámetro es la url del recurso a consumir
    fetch(url)
        // Después tenemos una cadena de promesas que se ejecutan en cascada
        .then((response) => {
            // Convertimos la respuesta a JSON ya que nuestro recurso está en ese formato
            return response.json();
        })
        .then((jsonObj) => {
            // Tomamos la respuesta convertida a JSON y emitimos un mensaje de vuelta
            //  notificando que terminamos la tarea y enviando un dato
            //  en este caso el JSON del recurso consumido por HTTP
            self.postMessage(jsonObj);
        })
        // Si existiera error, el método catch lo recibiría...
        .catch((err) => {
            // ... y lo notificaría en consola.
            console.error(err);
        })
}

