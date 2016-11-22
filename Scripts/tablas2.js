var tabla = 2;
var lista = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
lista = Shuffle(lista);
lista.splice(0, 1);
//Creo un número aleatorio para el multiplicando
var multiplicando = Math.floor(Math.random() * (11 - 0) + 0);
var multiplicador = 3;
var resultado = multiplicador * multiplicando;

creaElementos(multiplicador, multiplicando);

function creaElementos(multiplicador, multiplicando) {

    //Creo la pregunta.
    var multi = "<div id='multi'><p>" + multiplicador + "x" + multiplicando + "= ?</p></div>";
    $("#cuerpo").append(multi);
    var lista = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    //En opciones guardo las posibles respuestas
    var opciones = [];
    //En opcion guardo la posible respuesta
    var opcion;

    //Guardo en el array las opciones.
    opciones[0] = "<button type='button' class='btn btn-info' >" + multiplicador * multiplicando + "</button>";
    //-------------------------
    opcion = Math.floor(Math.random() * (lista.length - 0) + 0);
    opciones[1] = "<button type='button' class='btn btn-info' >" + lista[opcion] + "</button>";
    lista.splice(opcion, 1);

    //--------------------------
    opcion = Math.floor(Math.random() * (lista.length - 0) + 0);
    opciones[2] = "<button type='button' class='btn btn-info' >" + lista[opcion] + "</button>";
    lista.splice(opcion, 1);

    //------------------------------------
    //opcion = Math.floor(Math.random((lista.length - 1) - 0) + 0);
    opcion = Math.floor(Math.random() * (lista.length - 0) + 0);
    opciones[3] = "<button type='button' class='btn btn-info' >" + lista[opcion] + "</button>";

    //Mezclo el array de pciones para mostrarlo.
    opciones = Shuffle(opciones);
    for (var a = 0; a <= 3; a++) {
        //Añado las opciones a la ventana.
        $("#opciones").append(opciones[a]);
    }
    $(".btn").on("click", function () {
        if ($(this).text() == resultado) {
            $(this).removeClass('btn-info').addClass('btn-success');
            $("button").off('click');
            acierto(true);
            vuelveACargar();

        } else {
            $(this).removeClass('btn-info').addClass('btn-danger');
            $("button").off('click');
            lamenta();
            vuelveACargar();
        }

    });
}

function vuelveACargar() {
    $("#multi p").text(multiplicador + "x" + multiplicando + "=" + resultado);


    setTimeout(function () {
        $("#cuerpo, #opciones").fadeOut(800, function () {
            $("#cuerpo, #opciones").empty();
            multiplicando = Math.floor(Math.random() * (11 - 0) + 0);
            resultado = multiplicador * multiplicando
            creaElementos(multiplicador, multiplicando);
        }).fadeIn(800);
    }, 2000);
};
