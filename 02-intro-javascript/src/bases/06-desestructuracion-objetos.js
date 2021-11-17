
// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre :'tony',
    edad: 45,
    clave: 'ironman'
};

const {nombre, edad, clave} = persona;

const fibonacci = [1,1,2,3];
const [primero, segundo, tercero, cuarto] = fibonacci;

console.log(nombre);
console.log(edad);
console.log(clave);

console.log(primero);
console.log(segundo);
console.log(tercero);
console.log(cuarto);
