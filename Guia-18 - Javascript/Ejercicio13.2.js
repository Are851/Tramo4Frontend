console.log("Conectando a la Consola");

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('estadoForm').
    addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value; 
        const edad = document.getElementById('edad').value; 
        const sexo = document.getElementById('sexo').value; 
        const peso = document.getElementById('peso').value; 
        const altura = document.getElementById('altura').value; 

        console.log(nombre);
        console.log(edad);
        console.log(sexo);
        console.log(peso);
        console.log(altura);

        let sexoTexto = "";
        if (sexo == 1) {
            sexoTexto = "Hombre";
        } else if (sexo == 2) {
            sexoTexto = "Mujer";
        } else {
            sexoTexto = "Otro";
        }

        let persona = {
            nombre: nombre,
            edad: edad,
            sexo: sexoTexto,
            peso: peso,
            altura: altura
        };

        console.log(persona);
    });
});
