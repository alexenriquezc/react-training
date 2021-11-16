import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser() should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'alex'
        };
        
        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo() should return an object', () => {
        // const userTest = {
        //     uid: 'ABC123',
        //     username: 'alex'
        // };
        const name = 'alex'
        const user = getUsuarioActivo(name);
        // expect(activeUser).toEqual(userTest);
        expect(user).toEqual({
            uid: 'ABC123',
            username: name
        })
    })   
})
