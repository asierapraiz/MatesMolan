//Math.floor((Math.random() * 4));
//-----------------Audios---------------------
var dingRojo = new Audio('audio/ding0.ogg');
var dingAzul = new Audio('audio/ding1.ogg');
var dingAmarillo = new Audio('audio/ding2.ogg');
var dingVerde = new Audio('audio/ding3.ogg');

//------------Distintas variables--------------
var colores = ["rojo", "azul", "verde", "amarillo"];
//En original voy guardando los colores elegidos por simon
var original = [];
//Utilizo jugada para mostrar y comparar .
var jugada = [];
//Variable que marca la velocidad inicial.
var velocidad = 1200;

//-----------Comienza el juego--------------
$(document).ready(function () {
    añadeColor();
});
//Selecciona un color al azar y lo incluye en el array original.
function añadeColor() {
    var color = colores[Math.floor((Math.random() * 4))];
    //Guardo el color elegido por Simon
    original.push(color);
    //Copio el array original a jugada.
    jugada = original.slice();
    //Voy aumentando la velocidad.
    velocidad = velocidad - (velocidad / 10);
    juega();
}

//Muestra por pantalla
function juega() {
    $(".quesito").off('click');
    setTimeout(function () {
        //Ilumina quesito.
        ilumina($("#" + jugada[0]));
        //Borro de jugada el color ya mostrado
        jugada.shift();
        if (jugada.length == 0) {
            //Vulevo a recargar jugada con el original
            jugada = original.slice();
            escucha();
        } else {
            juega();
        }
    }, velocidad);
}

//Turno del jugador.
//Comprueba cada selección del jugador.
function escucha() {
    $(".quesito").on("click", function () {
        //Si acierta...
        if ($(this).attr('id') == jugada[0]) {
            ilumina($(this));
            //Borro el color acertado
            jugada.shift();
            //Si ya no quedan colores en el array..
            if (jugada.length == 0) {
                setTimeout(function () {
                    añadeColor();
                }, velocidad);
            }
            //Si falla...
        } else {
            audioError.play();
            fallo($(this));
            //Reseteo todo
            jugada.length = 0;
            original.length = 0;
            velocidad = 1200;
            //Vuelvo a empezar..
            setTimeout(function () {
                añadeColor();
            }, 2000);
        }
    });
}

//Apaga el quesito por fallar
function fallo(elemento) {
    elemento.addClass('fallo');
    setTimeout(function () {
        elemento.removeClass('fallo');
    }, 2000);
}


//Ilumina el quesito correspondiente.
function ilumina(elemento) {
    elemento.addClass('brilla');
    setTimeout(function () {
        elemento.removeClass('brilla');
    }, velocidad - 200);
    var color = elemento.attr('id');
    switch (color) {
    case 'rojo':
        if (dingRojo.currentTime > 0 || !dingRojo.paused) {
            dingRojo.currentTime = 0;
        }
        dingRojo.play();
        break;
    case 'amarillo':
        if (dingAmarillo.currentTime > 0 || !dingAmarillo.paused) {
            dingAmarillo.currentTime = 0;
        }
        dingAmarillo.play();
        break;
    case 'azul':
        if (dingAzul.currentTime > 0 || !dingAzul.paused) {
            dingAzul.currentTime = 0;
        }
        dingAzul.play();
        break;
    case 'verde':
        if (dingVerde.currentTime > 0 || !dingVerde.paused) {
            dingVerde.currentTime = 0;
        }
        dingVerde.play();
        break;
    }

}
