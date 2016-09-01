$("#formulario1").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3
        },
        apellido: {
            required: true,
            minlength: 3
        },
        clave: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        nombre: {
            required: "El nombre es necesario",
            minlength: "Minimo tres letras."
        },
        apellido: {
            required: "El apellido es necesario",
            minlength: "Minimo tres letras."
        },
        clave: {
            required: "La clave es necesaria.",
            minlength: "Minimo tres letras."
        }

    }

});

$("#formulario2").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3
        },
        clave: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        nombre: {
            required: "El nombre es necesario",
            minlength: "Minimo tres letras."
        },
        clave: {
            required: "La clave es necesaria.",
            minlength: "Minimo tres letras."
        }

    }

});