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
var numero = 0;


/*
$("#grid").append("<div id='centenas' class='marco'><div class='up' ><img class='carta' src='img/" + numero + ".jpg'></div>  <div class='down'> <img class='carta' src='img/1.jpg'></div></div><div id='decenas' class='marco'><div class='up' ><img class='carta' src='img/" + numero + ".jpg'></div><div class='down'> <img class='carta' src='img/1.jpg'></div></div><div id='unidades' class='marco'><div class='up' ><img class='carta' src='img/" + numero + ".jpg'></div><div class='down'> <img class='carta' src='img/1.jpg'></div>");*/

$("#grid").append("<div id='decenas' class='marco'><div class='up' ><img class='carta' src='img/" + (numero + 1) + ".jpg' name='" + (numero + 1) + "'></div><div class='down'> <img class='carta' src='img/0.jpg'></div></div><div id='unidades' class='marco'><div class='up'><img class='carta' src='img/" + numero + ".jpg'  name='" + numero + "'></div><div class='down'><img class='carta' src='img/0.jpg'></div></div>");

$("#unidades").on("click", function () {
    $(".up").css("transition", intervalo);
    suma(13);
})




$("#vadorrin").on("click", function () {
    //cambiaHora(numero);
    var unidades = new unidad(numero);
    unidades.añadir(numero);
});

function suma(cantidad) {
    cambiaUnidad();
    cantidad--;
    setTimeout(function () {
        if (cantidad > 0) {
            suma(cantidad);
        }
    }, intervalo);
};



function cambiaUnidad() {
    $("#unidades .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {
        $("#unidades .down .carta").attr("src", "img/" + numero + ".jpg"); //Cambio el valor de carta inferior.
        $("#unidades .up").remove(); //Elimino la carta girada y preparo una nueva.
        numero++; //Cambio el valor de numero.
        if (numero == 10) {
            cambiaDecenas();

            numero = 0;
        }
        //Preparo una nueva carta.
        $("#unidades").append("<div class='up'><img class='carta' src='img/" + numero + ".jpg'> </div>");
    }, intervalo - (intervalo / 20));
}

function cambiaDecenas() {
    var valor = $("#decenas .up .carta").attr('name');
    console.log(valor);

    $("#decenas .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {
        $("#decenas .down .carta").attr("src", "img/" + valor + ".jpg"); //Cambio el valor de carta inferior.
        $("#decenas .up").remove(); //Elimino la carta girada y preparo una nueva.  valor++;
        valor++;
        //Preparo una nueva carta.
        $("#decenas").append("<div class='up'><img class='carta' src='img/" + valor + ".jpg' name='" + valor + "'> </div>");
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
