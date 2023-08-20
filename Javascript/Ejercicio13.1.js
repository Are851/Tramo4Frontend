function Persona(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}

// Crear una instancia de Persona usando los valores proporcionados por el usuario
let nombre = prompt("Nombre:");
let edad = parseInt(prompt("Edad:"));
let sexo = prompt("Sexo:");
let peso = parseFloat(prompt("Peso:"));
let altura = parseFloat(prompt("Altura:"));

let persona = new Persona(nombre, edad, sexo, peso, altura);
console.log(persona);