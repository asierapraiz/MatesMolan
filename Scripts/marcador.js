var intervalo = 700;
var puntosIniciales = 000;

//------Despiezo el valor de puntosIniciales
var centenas = Math.floor(puntosIniciales / 100);
var decenas = Math.floor((puntosIniciales - (centenas * 100)) / 10);
var unidades = Math.floor(puntosIniciales - (centenas * 100) - (decenas * 10));


//------Preparo los elementos del marcador.
var marcador = "<div id='centenas' ><div class='up' ><img  src='img/" + (centenas + 1) + ".jpg' name='" + (centenas + 1) + "'></div><div class='down'> <img  src='img/" + centenas + ".jpg'></div></div>";

marcador += "<div id='decenas' ><div class='up' ><img  src='img/" + (decenas + 1) + ".jpg' name='" + (decenas + 1) + "'></div><div class='down'> <img  src='img/" + decenas + ".jpg'></div></div>";

marcador += "<div id='unidades' ><div class='up' ><img  src='img/" + (unidades + 1) + ".jpg' name='" + (unidades + 1) + "'></div><div class='down'> <img  src='img/" + unidades + ".jpg'></div></div>";
//------Incorporo el marcador a la pantalla
$("#marcador").append(marcador);




//Método intermedio que llama a los métodos que cambian el marcador.
//Se llama a si mismo hasta que la cantidad=0.
function sumaPuntos(cantidad) {
    cambiaUnidades();
    cantidad--;
    //Si todavía hay puntos por añadir, se vuelve a llamar a si mismo.
    setTimeout(function () {
        if (cantidad > 0) {
            sumaPuntos(cantidad);
        }
        //Intervalo es un poco mayor para que le de tiempo a cambiar la carta.
    }, intervalo + (intervalo / 20));
};

//Cambia unidades en el marcador.
function cambiaUnidades(cantidad) {
    var valor = $("#unidades .up img").attr('name');
    $("#unidades .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {
        $("#unidades .down img").attr("src", "img/" + valor + ".jpg"); //Cambio el valor de carta inferior.
        $("#unidades .up").remove(); //Elimino la carta girada y preparo una nueva.
        if (cantidad < 0) {
            cantidad++;
        } else {
            cantidad--;
        }
        valor++; //Cambio el valor de puntosIniciales.
        if (valor == 10) {
            cambiaDecenas();
            valor = 0;
        }
        //Preparo una nueva carta.
        $("#unidades").append("<div class='up'><img  src='img/" + valor + ".jpg' name='" + valor + "'> </div>");
    }, intervalo);
}

//Cambia las decenas en el marcador.
function cambiaDecenas() {
    var valor = $("#decenas .up img").attr('name');
    if (valor == 0) {
        cambiaCentenas();
    }

    $("#decenas .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {

        $("#decenas .down img").attr("src", "img/" + valor + ".jpg"); //Cambio el valor de carta inferior.
        $("#decenas .up").remove(); //Elimino la carta girada y preparo una nueva.  valor++;
        valor++;
        if (valor == 10) {

            valor = 0;
        }
        //Preparo una nueva carta.
        $("#decenas").append("<div class='up'><img  src='img/" + valor + ".jpg' name='" + valor + "'> </div>");
    }, intervalo);
}

//Cambia las centenas en el marcador.
function cambiaCentenas() {
    var valor = $("#centenas .up img").attr('name');

    $("#centenas .up").css({
        "transform": "rotateX(0deg)"
    });
    setTimeout(function () {
        $("#centenas .down img").attr("src", "img/" + valor + ".jpg"); //Cambio el valor de carta inferior.
        $("#centenas .up").remove(); //Elimino la carta girada y preparo una nueva.  valor++;
        valor++;
        if (valor == 10) {
            valor = 0;
        }
        //Preparo una nueva carta.
        $("#centenas").append("<div class='up'><img  src='img/" + valor + ".jpg' name='" + valor + "'> </div>");
    }, intervalo);
}
