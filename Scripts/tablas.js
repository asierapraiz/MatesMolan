var aciertos = 0;

var lista = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
Shuffle(lista);

//Cariable que indica la tabla a la que vamos a jugar.
var ladel = 2;
var desde = 1;
var hasta = 10;

$(document).ready(function () {
    creaSelectores();
    creaElementos(ladel);
});

function creaSelectores(hecho) {
    for (var a = 1; a <= 9; a++) {
        var selector = "<div id='" + a + "' class='selector'>" + a + "</div>";
        $("#aside").append(selector);
    }
    $(".selector").on('click', function () {
        $(".selector").animate({
            "background-color": "#c3f468"
        });
        $(this).animate({
            "background-color": "#dd84f2"
        });
        var eleccion = $(this).text();
        ladel = eleccion;
        creaElementos();
    });
}


//Creo los elementos en la pantalla.
function creaElementos() {
    muestraModal();
    $("#" + (ladel - 1)).animate({
        "background-color": "#c3f468"
    });
    $("#" + ladel).animate({
        "background-color": "#dd84f2"
    });
    aciertos = 0;
    $(".dropable").remove();
    $(".dragable").remove();
    for (var a = desde; a <= hasta; a++) {
        //Creo el elemento de la izq.
        var elemento = "<div data-resultado= '" + ladel * a + "' class='dropable'>" + ladel + " x " + a + " = </div>";
        //LO añado a la columna izquierda.
        $("#columnaIzq").append(elemento);
        //Creo los elementos de la dch.
        var elemento2 = "<div data-resultado= '" + lista[a - 1] * ladel + "' class='dragable'>" + lista[a - 1] * ladel + "</div>";
        //Añado los elementos a la columna dch.
        $("#columnaDch").append(elemento2);

    }

    //Cuando el raton pase por encima del elemento, Vadorrin mira.
    $(".dragable").on("mouseover", function () {
        miraPanel();
    });

    $(".dragable").mouseleave(function () {
        miraDelante();
    });

    //Añado la propiedad dropable a los elementos de la izq.
    $('.dropable').droppable({
        drop: function (event, ui) {
            //lo coloco en el centro.
            snapToMiddle(ui.draggable, $(this));
            //Compruebo si corresponden.
            comprueba(ui.draggable, $(this));

        }
    });

    //Añado la propiedad dragable a los elementos de la dch.
    $(".dragable").draggable({
        opacity: .4,
        create: function () {
            //Le eñado datos que me serviran para comparar.
            $(this).data('position', $(this).position())
        },
        cursorAt: {
            left: 15
        },
        cursor: 'move',
        start: function () {
            $(this).stop(true, true)
        }
    });
}

function muestraModal() {
    $("#tituloModal p").remove();
    $("#tablaRepaso p ").remove();
    var tituloModal = "<p>Repasa la tabla del " + ladel + ".</p>";
    $("#tituloModal").append(tituloModal);
    for (var a = 1; a <= 9; a++) {
        var texto = "<p>" + ladel + "x" + a + "=" + (ladel * a) + "</p>";
        $("#tablaRepaso").append(texto);
    }
    $("#repaso").modal('show');

}

//Funcion para comprobar si el lugar corresponde al elemento.
function comprueba(dragable, target) {

    if (dragable.data('resultado') !== target.data('resultado')) {
        //Si no coinciden, cambio a color rojo.
        dragable.animate({
            "background-color": "red",
            "color": "white"
        });
        lamenta();
    } else {
        //Anulo la funcion draggable y dropable del elemento.
        dragable.draggable('disable');
        target.droppable('disable');
        //Si coinciden cambio a color verde.
        dragable.animate({
            "background-color": "#c3f468"
        });
        dragable.css({
            "border-left-width": "0px",
            "border-radius": " 0px 8px 8px 0px",
            "color": "black"
        });
        setTimeout(function () {
            compruebaAciertos();
            target.animate({
                "background-color": "#c3f468"
            });
        }, 300);
        acierto(true);

    }
}

function compruebaAciertos() {
    aciertos++;
    console.log(aciertos);
    if (aciertos == 10) {
        ladel++;
        console.log(ladel);
        aplaude();
        setTimeout(function () {
            creaElementos(ladel);
        }, 4000);
    }
}

//- dragger.outerWidth(true)
//Funcion para colocar el elemnto en el centro.
function snapToMiddle(dragger, target) {
    var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
    var leftMove = target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 1;
    dragger.animate({
        top: topMove,
        left: leftMove
    }, {
        duration: 600,
        easing: 'easeOutBack'
    });
}
