const num = [10, 20, 30, 31]
const palabras = ["hola "," mi rey ",'🍔']

//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function suma(x){
    let suma =0;
    for(let i=0; i<x.length;i++){
        suma += x[i]
    }
    return suma
}

console.log(suma(num))

//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedio(x){
    let promedio = suma(x)
    promedio = promedio/x.length
    return promedio
}

console.log(promedio(num))

//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function mayuscula(x){
    let arreglo = []
    for(let i=0; i<x.length;i++){
        arreglo.push(x[i].toUpperCase());
    }
    return arreglo
}

console.log(mayuscula(palabras))

//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function pares(x){
    let arreglo = []
    for(let i=0; i<x.length;i++){
       if(x[i]%2 == 0){
           arreglo.push(x[i])
       }
    }
    return arreglo
}

console.log(pares(num))
