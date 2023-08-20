// Ejercicio 21
// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.
// Pedir los datos de la persona mediante prompt
let nombre = prompt("Ingrese el nombre:");
let edad = parseInt(prompt("Ingrese la edad:"));
let sexo = prompt("Ingrese el sexo (H/M/O):");
let peso = parseFloat(prompt("Ingrese el peso (en kg):"));
let altura = parseFloat(prompt("Ingrese la altura (en metros):"));

// Definición del objeto Persona con los datos ingresados
let Persona = {
    nombre: nombre,
    edad: edad,
    sexo: sexo,
    peso: peso,
    altura: altura,
};

// Creación de un arreglo que contiene los datos de la Persona
let datos = [
    Persona.nombre,
    Persona.edad,
    Persona.sexo,
    Persona.peso,
    Persona.altura,
];

// Imprimir el arreglo datos y el objeto Persona en la consola
console.log("Arreglo de datos:", datos);
console.log("Objeto Persona:", Persona);

/* Forma tradicional de hacerlo sin prompts
let Persona = {
    nombre: "Robert",
    edad: 42,
    sexo: "H",
    peso: 100,
    altura: 1.84,
  };
  let datos = [
    Persona.nombre,
    Persona.edad,
    Persona.sexo,
    Persona.peso,
    Persona.altura,
  ];
  
  console.log(datos);
  console.log(Persona); */