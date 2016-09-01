var dingRojo = new Audio('audio/ding0.ogg');
var dingAzul = new Audio('audio/ding1.ogg');
var dingAmarillo = new Audio('audio/ding2.ogg');
var dingVerde = new Audio('audio/ding3.ogg');
var colores = ["rojo", "azul", "verde", "amarillo"];
var jugada = [];
var seleccion = [];
var timbres = 1;
var tiro = 1;
var turno = 1;
var tirada = 1;
var velocidad = 1200;
/*console.log(colores[1]);*/
$(".quesito").on("click", function () {
    ilumina($(this));
});

$(document).ready(function () {
    if (juega(timbres)) {
        escucha(timbres);
    }


});
/*
$("#" + colores[1]).click();
console.log(colores[1]);*/

Math.floor((Math.random() * 4));


function juega(timbres) {
    $("#quesito").off('click');
    var cont = 1;
    setTimeout(function () {
        var color = colores[Math.floor((Math.random() * 4))];
        jugada.push(color);
        console.log(jugada[jugada.length - 1]);
        ilumina($("#" + color));
        if (cont < timbres - 1) {
            juega(timbres - 1);
            cont++;
        } else {
            return true;
        }
    }, velocidad);


}

function escucha(timbres) {
    console.log("Hola");
    if (tiro <= timbres) {
        $("#quesito").on("click", function () {
            if (this.attr('id') == jugada[timbres]) {
                ilumina($("#" + color));
                tiro++;
            } else {
                audioError.play();
            }
        });
        if (tiro == timbres) {
            tiro = 1;
            juega(2);
        }
    }

}



function ilumina(elemento) {
    elemento.addClass('brilla');
    setTimeout(function () {
        elemento.removeClass('brilla');
    }, 700);
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