var audio = new Audio('audio/acierto.wav');
var audioWin = new Audio('audio/win.mp3');
var audioError = new Audio('audio/error.ogg');
var audioFin = new Audio('audio/fin.wav');


//Funcion para mezclar un array.
function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function cambiaImagen(ruta) {
    $("#vadorrin1").fadeOut(2000);

    $("#vadorrin2").attr("src", ruta).fadeIn(2000);
}

function vuelveImagen() {
    $("#vadorrin2").fadeOut(2000);
    $("#vadorrin1").fadeIn(2000);
}

function acierto(acierto) {
    if (acierto == true) {
        audio.play();
        $("#vadorrin1").fadeOut();
        $("#vadorrin2").attr("src", "anim/gifs/salta.gif").fadeIn()
            .delay(3500).fadeOut(1000);
        $("#vadorrin1").delay(3500).fadeIn(1000);

        /*---Añado los puntos al marcador---*/
        sumaPuntos(5);
        //--------------
        var puntos = parseInt($("#puntos").text());

        $("#puntos").text(puntos);
    } else {
        audioError.play();
        $("#vadorrin1").fadeOut(1000);
        $("#vadorrin2").attr("src", "img/Triste.png").fadeIn(1000)
            .delay(2000).fadeOut(1000);
        $("#vadorrin1").delay(2000).fadeIn(1000);

        /*------Quito los puntosdel marcador.----------*/
        var puntos = parseInt($("#puntos").text());
        puntos -= 2;
        $("#puntos").text(puntos);
    }
}

function vosteza() {
    $("#vadorrin1").fadeOut(2000);
    $("#vadorrin2").attr("src", "img/Vosteza2.png").fadeIn(2000)
        .delay(2000).fadeOut(2000);
    $("#vadorrin1").delay(2000).fadeIn(2000);

}

function lamenta() {
    audioError.play();
    $("#vadorrin1").fadeOut(1000);
    $("#vadorrin2").attr("src", "img/Triste.png").fadeIn(1000)
        .delay(2000).fadeOut(1000);
    $("#vadorrin1").delay(2000).fadeIn(1000);

}

function salta() {
    audio.play();
    $("#vadorrin1").fadeOut();
    $("#vadorrin2").attr("src", "anim/gifs/salta.gif").fadeIn()
        .delay(2000).fadeOut(1000);
    $("#vadorrin1").delay(2000).fadeIn(1000);

}

function aplaude() {
    audioWin.play();
    $("#vadorrin1").fadeOut();
    $("#vadorrin2").attr("src", "anim/gifs/aplaude.gif").fadeIn()
        .delay(3500).fadeOut(1000);
    $("#vadorrin1").delay(3500).fadeIn(1000);

}

function miraPanel() {
    $("#vadorrin1").fadeOut();
    $("#vadorrin2").attr("src", "img/MiraPanel.png").fadeIn()
        .delay(2000).fadeOut(1000);
    $("#vadorrin1").delay(2000).fadeIn(1000);

}
