function sumar(){
    let numero1 = 5;
    let resultado = numero1+5;

    return resultado
}

console.log("Funcion escrita normal")
console.log(sumar())

let sumar2 = () => {
    let numero1 = 5;
    let resultado = numero1+5;

    return resultado; 
}

console.log("Funcion flecha");
console.log(sumar2());