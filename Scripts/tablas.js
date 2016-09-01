$ladel = $.cookie("ladel");


//////////Audios/////////////////////////////////////////
var audio = new Audio('audio/acierto.wav');
var audioWin = new Audio('audio/win.mp3');
var audioError = new Audio('audio/error.ogg');
var audioFin = new Audio('audio/fin.wav');

//Array de colores.
var colores = new Array("#bf6f30", "#ff9540", "#ffa900", "#ffbe40", "#fe3f44", "#ff9b95", "#009b95", "#55cdc9");
Shuffle(colores);

//Array para guardar los elementos seleccionados.
var elegidos = [];
//Creo un array para guardar los objetos 
//con los que crearé las cartas.
var lista = [];

//Contador de aciertos.
var aciertos = 0;


////////////////////////////////////////////////////////

//Funcion para mezclar un array.
function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
//Array con numeros
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Shuffle(numeros);



//Esta funcion controla el juego de las tablas de multiplicar.

//Creo 8 ojetos que guardarán los datos 
for (var i = 0; i <= 7; i++) {
    //la parte ?*?
    var objeto = {
            texto: $ladel + "x" + numeros[i],
            resultado: numeros[i] * $ladel
        }
        //Lo guardo en el array.
    lista.push(objeto);
    //Hago lo mismo para la carta que guarda el resultado.
    objeto = {
        texto: numeros[i] * $ladel,
        resultado: numeros[i] * $ladel
    }
    lista.push(objeto);
}

//Mezclo el array.
Shuffle(lista);

//Añado los elementos  al grid.
for (var a = 0; a <= 15; a++) {
    var elemento = "<div id='carta' class='marco' ><p id='" + a + "' class='carta' value='" + lista[a].resultado + "'>" + lista[a].texto + " </p></div>"
    $("#grid").append(elemento);
}

//Añado función click a los elementos.
$(".carta").on("click", function () {
    //miraPanel(); 

    //Cambio el color de lacarta.
    $(this).attr("class", "cartaElegida");

    //Creo un objeto donde guardo los valores id y name del elemneto.
    var objeto = {
        id: $(this).attr('id'),
        resultado: $(this).attr('value')
    };
    elegidos.push(objeto);
    //array(elegidos);
    if (elegidos.length == 2) {
        comprueba(elegidos);
    }
});

//Comprueba si lascartaselegidas son correctas.
//Recibe el array con la selección.
function comprueba(elegidos) {
    //Si el resultado de la elección es acertado..
    if (elegidos[0].resultado == elegidos[1].resultado && elegidos[0].id !== elegidos[1].id) {
        aciertos++;
        //Termina partida
        if (aciertos == 8) {
            victoria();
            //Elijo color
            var color = colores.pop();
            //Anulo la función click de esas cartas.
            $("#" + elegidos[0].id).off("click")
                .attr("class", "carta")
                .animate({
                    backgroundColor: color
                }, 1000);
            $("#" + elegidos[1].id).off("click")
                .attr("class", "carta");
            $("#" + elegidos[1].id).animate({
                backgroundColor: color
            }, 1000);
            aplaude();
            audioWin.play();
            setTimeout(function () {
                location.reload();
            }, 6000);
        } else {
            acierto();
            salta();
            audio.play();
            //Elijo color
            var color = colores.pop();
            //Anulo la función click de esas cartas.
            $("#" + elegidos[0].id).off("click")
                .attr("class", "carta")
                .animate({
                    backgroundColor: color
                }, 1000);
            $("#" + elegidos[1].id).off("click")
                .attr("class", "carta")
                .animate({
                    backgroundColor: color
                }, 1000);
        }
    } else {
        fallo();
        lamenta();
        audioError.play();
        $("#" + elegidos[0].id).attr("class", "carta");
        $("#" + elegidos[1].id).attr("class", "carta");
    }
    //Vacio el array de elegidos.
    elegidos.length = 0;
}