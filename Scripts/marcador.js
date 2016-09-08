/*
function acierto() {
    var puntos = parseInt($("#puntos").text());
    puntos += 5;
    $("#puntos").text(puntos);
}

function fallo() {
    var puntos = parseInt($("#puntos").text());
    puntos -= 2;
    $("#puntos").text(puntos);
}*/

//Relleno el grid de cartas, que las tomo de la lista desordenada.

var numero = 2;


//--------------Clase unidad--------------------
var unidad = function (valor) {
    this.añadir = function (valor) {
        $("#grid").append("<div id='horas' class='marco' name='horas'><div class='front up' ><img class='carta' src='img/" + valor + ".jpg'></div><div class='back down'> <img class='carta' src='img/1.jpg'></div></div>");
        $("#horas").on("click", function () {
            cambiaHora(valor);
        })
    }
}

$("#vadorrin").on("click", function () {
    console.log("ok");
    //cambiaHora(numero);
    var unidades = new unidad(numero);
    unidades.añadir(numero);
});

$("#horas").on("click", function () {
    console.log("ok2");
})

function cambiaHora() {

    //Giro la carta superior
    $(".up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {
        $(".down .carta").attr("src", "img/" + numero + ".jpg"); //Cambio el valor de carta inferior.
        $(".up").remove(); //Elimino la carta girada y preparo una nueva.
        numero++; //Cambio el valor de numero.
        //Preparo una nueva carta.
        $("#horas").append("<div class='front up'><img class='carta' src='img/" + numero + ".jpg'> </div>");
    }, 700);
}

function victoria() {
    var puntos = parseInt($("#puntos").text());
    puntos += 20;
    $("#puntos").text(puntos);
    var puntosTotales = (parseInt($("#puntos").text())) + (parseInt($.cookie('puntos')));
    $.cookie('puntos', puntosTotales);
    $("#puntosTotales").text(puntosTotales);

}
