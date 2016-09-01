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

function victoria() {
    var puntos = parseInt($("#puntos").text());
    puntos += 20;
    $("#puntos").text(puntos);
    var puntosTotales = (parseInt($("#puntos").text())) + (parseInt($.cookie('puntos')));
    $.cookie('puntos', puntosTotales);
    $("#puntosTotales").text(puntosTotales);

}