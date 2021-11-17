// import {heroes} from './data/heroes'
// import {heroes,owners} from './data/heroes'
import heroes from '../data/heroes';

export const getHeroById = (id) => heroes.find(h => h.id ===id);
// console.log(getHeroById(2));


export const getHeroesByOwner = (owner) => heroes.filter(h => h.owner === owner);
// console.log(getHeroesByOwner('DC'));

// console.log(owners);