// if(module.hot){
//     module.hot.accept();
// }
const personajes = ['goku', 'Vegeta', 'Trunks'];

const [, vegeta,trunks ] = personajes;

// console.log(goku);
console.log(vegeta);
console.log(trunks);


const usState = (valor) => {
    return [valor, ()=>{console.log(`Hola ${valor}`)}];
}

const [nombre, setNombre] = usState('Goku');

setNombre();
console.log(nombre);
setNombre('DSAFASDF');
console.log(nombre);