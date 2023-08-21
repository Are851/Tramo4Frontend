// Ejercicio 10
// Escribir una función flecha que reciba una palabra y la 
//devuelva al revés.
const revertirPalabra = palabra => {
    return palabra.split('').reverse().join('');
};

// Ejemplo de uso
const palabraOriginal = prompt("Ingrese una palabra");
const palabraRevertida = revertirPalabra(palabraOriginal);
console.log(palabraRevertida); // Imprimirá "recnococer"
/*En esta función, primero se convierte la palabra en un array 
de caracteres usando split(''). Luego se invierte el orden de
 los elementos del array usando reverse(), y finalmente se unen
  los caracteres del array invertido nuevamente en una cadena 
  usando join(''). El resultado es la palabra revertida.*/

/*
let palabra = prompt("Ingrese una palabra");
let func = function (palabra) {
  let palabraReves = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraReves += palabra[i];
  }
  return palabraReves;
};
let palabraReves = func(palabra);
console.log(palabraReves);*/