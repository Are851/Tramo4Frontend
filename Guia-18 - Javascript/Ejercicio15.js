// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario
function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function calcularPerimetro(radio) {
    return 2 * Math.PI * radio;
}

function Circulo(radio) {
    this.area = calcularArea(radio);
    this.calcularArea = function() {
        return calcularArea(radio);
    };
    this.perimetro = calcularPerimetro(radio);
    this.calcularPerimetro = function() {
        return calcularPerimetro(radio);
    };
}

let radioIngresado = parseInt(prompt("Ingresa el radio del círculo"));
let circulo = new Circulo(radioIngresado);

console.log("Área del círculo:", circulo.area);
console.log("Perímetro del círculo:", circulo.perimetro);
