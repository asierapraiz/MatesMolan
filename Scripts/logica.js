var lista = [];
var dificultad = 16;
var elec = [];
var acierto = 0;
var aciertos = 0;
var audio = new Audio('audio/acierto.mp3');
var audioWin = new Audio('audio/win.mp3');
var audioError = new Audio('audio/error.mp3');
var audioFin = new Audio('audio/fin.mp3');
var text = $("#texto");
var btnMensaje = 1;
var puntos = 0;

$("#puntosTotales").text($.cookie('puntos'));

//alert(parseInt($("#puntosTotales").text()) + 10);
//alert(parseInt($.cookie('puntos')) + 10);


text.text("Busca las parejas que sean amigos del 10.")
    .fadeIn(2000);




function mensaje2() {
    text.text("Busca las parejas que sean amigos del 10.")
        .fadeIn(2000);
}

function mensaje3() {

    text.text("El juego comienza ya.")
        .fadeIn(2000)
        .delay(500).fadeOut("slow");
    $("#b1").css("display", "none");
}


$("#b1").click(function () {
    btnMensaje++;
    switch (btnMensaje) {
    case 2:
        mensaje2();
        break;
    case 3:
        mensaje3();
        break;

    }


})






//Funcion para mezclar un array.
function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//Relleno la lista de números hasta el valor dificultad.
for (var i = 1; i <= dificultad / 2; i++) {
    //Tomo un número aleatorio del 1 al 9.
    var num = Math.floor(Math.random() * (10 - 1) + 1);
    //Mete el número y su amigo en el array.
    lista.push(num);
    lista.push(10 - num);
}
//Mezclo el array.
Shuffle(lista);

//Relleno el grid de cartas, que las tomo de la lista desordenada.
for (var i = 0; i <= (dificultad) - 1; i++) {
    var valor = i + 1;

/*
    $("#grid").append("<div id='" + valor + "' class='marco' name='" + lista[i] + "'><div class='front'>?</div><div class='back'>" + lista[i] + " </div></div>");
*/

        $("#grid").append("<div id='" + valor + "' class='marco' name='" + lista[i] + "'><div class='front'> <img   class='carta'  src='img/incognita.jpg'></div><div class='back'> <img class='carta' src='img/" + lista[i] + ".jpg'></div></div>");

}


//Código que se ejecuta al presionar cada carta.
$(".marco").on("click", function () {

    $(this).css("transform", "rotateY(180deg)");
    //Creo un objeto donde guardo los valores id y name del elemneto.
    var objeto = {
        id: $(this).attr('id'),
        name: $(this).attr('name')
    };

    //Espero un segundo antes de continuar.
    setTimeout(function () {
        //meto el elemento en el array elec
        elec.push(objeto);
        if (elec.length == 2) {
            bootbox.confirm({
                title: 'Que opinas?',
                message: "<h1 class='parrafo'>" + elec[0].name + "+" + elec[1].name + "</h1 ><br><h1 class='parrafo'>Son amigos del 10?</h1>",
                buttons: {
                    'cancel': {
                        label: 'NO',
                        className: 'btn-default pull-left'
                    },
                    'confirm': {
                        label: 'SI',
                        className: 'btn-default pull-right'
                    }
                },
                callback: function (result) {
                    //Compruebo relustado y clasifico respuesta.
                    clasifica(comprueba(result));
                }
            });
        }
    }, 500);
});

//Clasifica el tipo de error.
function clasifica(acierto) {

    switch (acierto) {
    case 0:

        $("#" + elec[0].id).css("transform", "rotateY(0deg)");
        $("#" + elec[1].id).css("transform", "rotateY(0deg)");

        elec.length = 0;
        puntos -= 2;
        $("#puntos").text(puntos);
        audioError.play();
        lamenta();
        text.text("Pues no, no son amigos. Sigue intentádolo.")
            .fadeIn(2000)
            .delay(500).fadeOut("slow");
        break;
    case 1:
        $("#" + elec[0].id).off("click");
        $("#" + elec[1].id).off("click");
        $("#" + elec[0].id + " .back").css("background-color", "#45dafd");
        $("#" + elec[1].id + " .back").css("background-color", "#45dafd");

        aciertos++;
        if (aciertos == 8) {
            puntos += 20;
            $("#puntos").text(puntos);
            aplaude();
            audioWin.play();
            var puntosTotales = (parseInt($("#puntos").text())) + (parseInt($.cookie('puntos')));
            $.cookie('puntos', puntosTotales);
            $("#puntosTotales").text(puntosTotales);
            setTimeout(function () {
                location.reload();
            }, 4000);
        } else {
            salta();
            text.text("Muy bien, has acertado.")
                .fadeIn(2000)
                .delay(500).fadeOut("slow");
            audio.play();
            puntos += 5;
            $("#puntos").text(puntos);
            elec.length = 0;
        }
        break;
    case 2:
        lamenta();
        audioError.play();
        text.text("Mmmm, no has acertado.");
        $("#" + elec[0].id).css("transform", "rotateY(0deg)");
        $("#" + elec[1].id).css("transform", "rotateY(0deg)");
        puntos -= 2;
        $("#puntos").text(puntos);
        elec.length = 0;
        break;
    case 3:
        miraPanel();
        text.fadeIn("slow")
            .text("Tienes razón, sigue intentádolo.")
            .delay(2000)
            .fadeOut("slow");
        $("#" + elec[0].id).css("transform", "rotateY(0deg)");
        $("#" + elec[1].id).css("transform", "rotateY(0deg)");
        elec.length = 0;
        break;
    }
}

//Funcion para comprobar seleccionados.
function comprueba(result) {

    var acierto = 0;
    var diez = parseInt(elec[0].name) + parseInt(elec[1].name);
    if (diez != 10 && result == true) {
        acierto = 0;
    } else if (diez == 10 && result == true) {
        acierto = 1;
    } else if (diez == 10 && result == false) {
        acierto = 2;
    } else if (diez != 10 && result == false) {
        acierto = 3;
    }
    return acierto;
}
