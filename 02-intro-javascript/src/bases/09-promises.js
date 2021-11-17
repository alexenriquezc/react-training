import {getHeroById} from './bases/08-imp-exp';

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Tare
//         // Importar heroe
//         const hero = getHeroById(2);
//         if (hero != null)
//             resolve(hero);
//         else
//             reject();
//     }, 2000);
// });


// promise.then((hero) =>{
//     console.log('hero', hero);
// })
// .catch(err => console.warn(err))
// .finally()

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        // Tarea
        // Importar heroe
        const hero = getHeroById(id);
        if (hero)
            resolve(hero);
        else
            reject('No se pudo encontrar al hero');
    }, 2000);
});

}

// const printHero = (hero) => console.log('Hero', hero);

getHeroByIdAsync(1)
.then(console.log)
.catch(console.error);

