const saludar = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = (nombre) => `Hola ${ nombre }`;
const saludar4 = () => 'Hola Mundo';

export const getUser = () => ({
    uid: 'ABC123',
    username: 'alex'
});

export const getUsuarioActivo = ( nombre) => ({
    uid: 'ABC123',
    username: nombre
});