function mueveReloj(momentoActual) {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible
}



function alerta() {
    bootbox.confirm("Are you sure?", function (result) {
        Example.show("Confirm result: " + result);
    });
}