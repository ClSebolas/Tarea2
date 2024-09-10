1. //**Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
const persona={
    nombre:"Sebastian",
    edad:21,
    genero:"masculino"
}

console.log(persona.nombre+', '+persona.edad+', '+persona.genero)

2. //Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const caja={
    cuadernos:8,
    lapices:12,
    papel:1,
    fotografias:5,
    BuenEstado:true
}

console.log(caja)
console.log(caja.cuadernos,"tipo: "+typeof caja.cuadernos)
console.log(caja.lapices,"tipo: "+typeof caja.lapices)
console.log(caja.papel," tipo: "+typeof caja.papel)
console.log(caja.fotografias,"tipo: "+typeof caja.fotografias)
console.log(caja.BuenEstado,"tipo: "+typeof caja.BuenEstado)