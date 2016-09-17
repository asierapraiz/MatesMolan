$("#altaNueva").click(function () {
    $("#eleccion").css("display", "none");
    $("#formulario1").fadeIn("2000");
});

$("#entrar").click(function () {
    $("#eleccion").css("display", "none");
    $("#formulario2").fadeIn("2000");
});


$("#1").click(function () {
    location.href = "juego.html";
});
$("#2").click(function () {
    location.href = "tablas.html";
});
$("#3").click(function () {
    location.href = "simon.html";
});


/*------VADORRIN------------------*/
setTimeout(function () {
    guiña();
}, 1000);

function miraPanel() {
    $("#vadorrin1").fadeOut();
    $("#vadorrin2").attr("src", "img/MiraPanel.png").fadeIn()
        .delay(2000).fadeOut(1000);
    $("#vadorrin1").delay(2000).fadeIn(1000);

    setTimeout(function () {
        vosteza();
    }, 5000);

}

function vosteza() {
    $("#vadorrin1").fadeOut();
    $("#vadorrin2").attr("src", "img/Vosteza.png").fadeIn()
        .delay(2000).fadeOut(1000);
    $("#vadorrin1").delay(2000).fadeIn(1000);

    setTimeout(function () {
        guiña();
    }, 5000);

}

function guiña() {
    $("#vadorrin1").fadeOut();
    $("#vadorrin2").attr("src", "img/Pose2.png").fadeIn()
        .delay(1000).fadeOut(1000);
    $("#vadorrin1").delay(1000).fadeIn(1000);

    setTimeout(function () {
        miraPanel();
    }, 5000);

}
