var aciertos = 0;

var lista = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
Shuffle(lista);
var ladel = 7;
var desde = 1;
var hasta = 10;
for (var a = desde; a <= hasta; a++) {
    var elemento = "<div data-resultado= '" + ladel * a + "' class='dropable'>" + ladel + " x " + a + " = </div>";
    $("#columnaIzq").append(elemento);
    var elemento2 = "<div data-resultado= '" + lista[a - 1] * ladel + "' class='dragable'>" + lista[a - 1] * ladel + "</div>";
    $("#columnaDch").append(elemento2);

}



$(".dragable").on("mouseover", function () {
    miraPanel();
})

$(".dragable").draggable({
    opacity: .4,
    create: function () {
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

$('.dropable').droppable({
    drop: function (event, ui) {
        snapToMiddle(ui.draggable, $(this));
        comprueba(ui.draggable, $(this));

    }
});

function comprueba(dragable, target) {

    if (dragable.data('resultado') !== target.data('resultado')) {

        dragable.animate({
            "background-color": "red",
            "color": "white"
        });

        acierto(false);

    } else {
        aciertos++;
        dragable.animate({
            "background-color": "#3bff00"
        });
        dragable.css({
            "border-left-width": "0px",
            "border-radius": " 0px 8px 8px 0px",
            "color": "black"
        });
        setTimeout(function () {
            target.animate({
                "background-color": "#3bff00"
            });
            compruebaAciertos();
        }, 500);
        acierto(true);

    }
    console.log(aciertos);
}

function compruebaAciertos() {
    if (aciertos == 10) {
        aplaude();
    }
}

//- dragger.outerWidth(true)
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