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
var intervalo = 700;
var numero = 887;
var centenas = Math.floor(numero / 100);
var decenas = Math.floor((numero - (centenas * 100)) / 10);
var unidades = Math.floor(numero - (centenas * 100) - (decenas * 10));


console.log(centenas + "--" + decenas + "--" + unidades);



var marcador = "<div id='centenas' class='marco'><div class='up' ><img class='carta' src='img/" + (centenas + 1) + ".jpg' name='" + (centenas + 1) + "'></div><div class='down'> <img class='carta' src='img/" + centenas + ".jpg'></div></div>";

marcador += "<div id='decenas' class='marco'><div class='up' ><img class='carta' src='img/" + (decenas + 1) + ".jpg' name='" + (decenas + 1) + "'></div><div class='down'> <img class='carta' src='img/" + decenas + ".jpg'></div></div>";

marcador += "<div id='unidades' class='marco'><div class='up' ><img class='carta' src='img/" + (unidades + 1) + ".jpg' name='" + (unidades + 1) + "'></div><div class='down'> <img class='carta' src='img/" + unidades + ".jpg'></div></div>";

$("#grid").append(marcador);


$("#unidades").on("click", function () {
    $(".up").css("transition", intervalo);
    suma(15);
})

$("#vadorrin").on("click", function () {
    //cambiaHora(numero);
    var unidades = new unidad(numero);
    unidades.añadir(numero);
});

function suma(cantidad) {
    cambiaUnidades();
    cantidad--;
    setTimeout(function () {
        if (cantidad > 0) {
            suma(cantidad);
        }
    }, intervalo);
};



function cambiaUnidades() {
    var valor = $("#unidades .up .carta").attr('name');

    $("#unidades .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {
        $("#unidades .down .carta").attr("src", "img/" + valor + ".jpg"); //Cambio el valor de carta inferior.
        $("#unidades .up").remove(); //Elimino la carta girada y preparo una nueva.
        valor++; //Cambio el valor de numero.
        if (valor == 10) {
            cambiaDecenas();
            valor = 0;
        }
        //Preparo una nueva carta.
        $("#unidades").append("<div class='up'><img class='carta' src='img/" + valor + ".jpg' name='" + valor + "'> </div>");
    }, intervalo - (intervalo / 20));
}

function cambiaDecenas() {
    var valor = $("#decenas .up .carta").attr('name');
    console.log(valor);
    if (valor == 0) {
        cambiaCentenas();
    }

    $("#decenas .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {

        $("#decenas .down .carta").attr("src", "img/" + valor + ".jpg"); //Cambio el valor de carta inferior.
        $("#decenas .up").remove(); //Elimino la carta girada y preparo una nueva.  valor++;
        valor++;
        if (valor == 10) {

            valor = 0;
        }
        //Preparo una nueva carta.
        $("#decenas").append("<div class='up'><img class='carta' src='img/" + valor + ".jpg' name='" + valor + "'> </div>");
    }, intervalo - (intervalo / 20));
}

function cambiaCentenas() {
    var valor = $("#centenas .up .carta").attr('name');
    console.log("centenas" + valor);
    $("#centenas .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {
        $("#centenas .down .carta").attr("src", "img/" + valor + ".jpg"); //Cambio el valor de carta inferior.
        $("#centenas .up").remove(); //Elimino la carta girada y preparo una nueva.  valor++;
        valor++;
        if (valor == 10) {
            valor = 0;
        }
        //Preparo una nueva carta.
        $("#centenas").append("<div class='up'><img class='carta' src='img/" + valor + ".jpg' name='" + valor + "'> </div>");
    }, intervalo - (intervalo / 20));
}


//-------------------------------------------------------------------------------------------
function victoria() {
    var puntos = parseInt($("#puntos").text());
    puntos += 20;
    $("#puntos").text(puntos);
    var puntosTotales = (parseInt($("#puntos").text())) + (parseInt($.cookie('puntos')));
    $.cookie('puntos', puntosTotales);
    $("#puntosTotales").text(puntosTotales);

}
