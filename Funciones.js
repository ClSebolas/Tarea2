const x = "HOLA mis CHAvales"
const num1 = 10
const num2 = 20

//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function mayuscula(x){
    return x.toUpperCase()
}

console.log(mayuscula(x))

//2. Crea una función que reciba un string y retorne el string en minúsculas.
function minusculas(x){
    return x.toLowerCase()
}

console.log(minusculas(x))

//3. Crear una función que reciba como parámetro 2 números y los reste.
function resta(num1,num2){
    return num1-num2
}

console.log(resta(num1,num2))

//4. Crear una función que reciba como parámetro 2 números y los divida.
function division(num1,num2){
    return num1/num2
}

console.log(division(num1,num2))

//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicacion(num1,num2){
    return num1*num2
}

console.log(multiplicacion(num1,num2))

//6. Crear una función que reciba un string y devuelva la longitud del string.
function tamaño(x){
    return x.length
}

console.log(tamaño(x))