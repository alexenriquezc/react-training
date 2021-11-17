import { getHeroById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('should return a hero by id', () => {
        const id =1;
        const hero = getHeroById(id);
        const heroData = heroes.find(h => h.id === id);
        expect(hero).toEqual(heroData);
    });

    test('should return undefined if hero does not exist', () => {
        const id = 10;
        const hero = getHeroById(id);
        expect(hero).toBe(undefined);
    });
    
    test('should return DC heroes', () => {
        const owner = 'DC';
        const heroesResponse = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroesResponse).toEqual(heroesData);
    });
    
    test('should return Marvel heroes', () => {
        const owner = 'Marvel';
        const heroesResponse = getHeroesByOwner(owner);
        
        expect(heroesResponse.length).toBe(2);
    })
    
})
