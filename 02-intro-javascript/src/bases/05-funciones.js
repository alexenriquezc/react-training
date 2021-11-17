function saludar(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

const getUser = () => ({
        uid: 'ABC123',
        username: 'Advocate123'
});


function getUsuarioActivo (nombre){
    return {
        uid: "ABC123",
        username: nombre
    }
};


const getUsuarioActivo2 = (nombre) => ({
    uid: 'BAC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo("Alex");
console.log(usuarioActivo);

const usuarioActivo2 = getUsuarioActivo2("Alex");
console.log(usuarioActivo2);
console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Chaoz'));
console.log(getUser());

