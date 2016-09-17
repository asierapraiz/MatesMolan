var audio = new Audio('audio/acierto.mp3');
var audioWin = new Audio('audio/win.mp3');
var audioError = new Audio('audio/error.mp3');
var audioFin = new Audio('audio/fin.mp3');



//Funcion para mezclar un array.
function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


function acierto(acierto) {
    var ruta = $("#vadorrin2").attr('src');
    if (ruta != 'anim/gifs/salta*') {
        salta();
    }
    sumaPuntos(5);
}

function vosteza() {
    $("#vadorrin1").fadeOut(2000).delay(2000).fadeIn(2000);
    $("#vadorrin2").attr("src", "img/Vosteza2.png").fadeIn(2000)
        .delay(2000).fadeOut(2000);
}

function lamenta() {
    audioError.play();
    $("#vadorrin1").fadeOut(1000).delay(2000).fadeIn(1000);
    $("#vadorrin2").attr("src", "img/Triste.png").fadeIn(1000)
        .delay(2000).fadeOut(1000);
}

function salta() {
    audio.play();
    $("#vadorrin1").fadeOut(200).delay(2000).fadeIn(1000);
    $("#vadorrin2").attr("src", "anim/gifs/salta.gif").fadeIn(200)
        .delay(2000).fadeOut(1000);

}

function aplaude() {
    audioWin.play();
    $("#vadorrin1").fadeOut().delay(3500).fadeIn(1000);
    $("#vadorrin2").attr("src", "anim/gifs/aplaude.gif").fadeIn()
        .delay(3500).fadeOut(1000);
}

function miraPanel() {
    $("#vadorrin1").fadeOut();
    $("#vadorrin2").attr("src", "img/MiraPanel.png").fadeIn();
}

function miraDelante() {
    $("#vadorrin2").fadeOut();
    $("#vadorrin1").fadeIn();
}
