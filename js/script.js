function sumarSinArgumentos(){
    let numero1 = 5;
    let resultado = numero1+5;

    return resultado
}

console.log("Funcion escrita normal sin argumentos")
console.log(sumarSinArgumentos())

let sumarFlechaSinArgumentos = () => {
    let numero1 = 5;
    let resultado = numero1+5;

    return resultado; 
}

console.log("Funcion flecha sin argumentos");
console.log(sumarFlechaSinArgumentos());

function sumarConArgumentos(numero1, numero2){
    let resultado = numero1+numero2;
    return resultado;
}

console.log("Funcion con argumentos");
console.log(sumarConArgumentos(100,50));

let sumarFlechaConArgumentos = (numero1, numero2) => {
    let resultado = numero1+numero2;
    return resultado; 
}

console.log("Funcion flecha con argumentos");
console.log(sumarFlechaConArgumentos(200,300));

