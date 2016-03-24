# ¿Y esto que?

Este es un ejemplo del uso de [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) y [Fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=es).

## ¿Web Worker?

Los Web Workers nos permiten ejecutar tareas en un hilo en background.

- Se comunican con el hilo principal a través de la emisión y recepción de mensajes
- No tienen acceso al objeto `window`

Básicamente nos permiten ejecutar _tareas bloqueantes_ de forma asíncrona en un hilo separado. Cuando la tarea se completa el Web Worker nos notifica de ello y nos entrega un resultado.

### Soporte

[Soporte en caniuse.com](http://caniuse.com/#search=web%20worker)

¡Disponible desde IE10!

## ¿Fetch?

Con Fetch podemos hacer solicitudes HTTP como las que se hacen con XMLHttpRequest ¡¡¡pero usando [promesas](http://www.html5rocks.com/en/tutorials/es6/promises/)!!!

- Sintaxis clara
- Podemos encadenar promesas y capturar errores fácilemente

### Soporte

[Soporte en caniuse.com](http://caniuse.com/#search=fetch)

No disponible todavía en:
    
- IE/Edge
- Safari