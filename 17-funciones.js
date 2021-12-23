//Forma de declarar funciones anterior a ES6
function saludar(){
    console.log("hola");
}

saludar()

//Forma de declarar funciones posterior a ES6, en la que no se requiere la palabra 'function' usando CONST y la función de flecha
const saludar2 = () => console.log("hola con =>");

const saludarUsuario = (user) => console.log(`hola ${user}`);

saludar2()
saludarUsuario('Diego')

const suma = (num1, num2) => {
    return num1 + num2;
}

console.log(suma(2,5))