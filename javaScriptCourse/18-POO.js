class Persona{

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `Me llamo ${this.nombre} ${apellido} y tengo ${this.edad} años.`;
    }

    saludar(){
        return this.datos
    }

}

const diego = new Persona('Diego', 'Fuentes', 28);
const karol = new Persona('Karol', 'Varela', 23);

console.log(diego)
console.log(karol.saludar())