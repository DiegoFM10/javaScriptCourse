/**
    Crea una clase Libro
    La clase libro tendrá título, autor, año y género.
    Crea un método que devuelva toda la información del libro
    Pide 3 libros y guárdalos en un array
    Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
    Validar que los campos no se introduzcan vacíos
    Validar que el año sea un número y que tenga 4 dígitos
    Validar que el género sea: aventuras, terror o fantasía
    Crea una función que muestre todos los libros
    Crea una función que muestre los autores ordenados alfabéticamente
    Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información 
*/  

class Libro{
    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    mostrarLibros(){
        return `El libro es: ${this.title} de ${this.author}, publicado en ${this.year}, del género ${this.gender}.`
    }

    getAuthor(){
        return this.author
    }

    getGender(){
        return this.gender
    }
}

let libros = [];

while(libros.length < 3){
    let title = prompt("Enter the title");
    let author = prompt("Enter the author");
    let year = prompt("Enter the year");
    let gender = prompt("Enter the gender").toLowerCase();

    if(title != '' && 
        author != '' && 
        !isNaN(year) && 
        year.length == 4 && 
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')){
               
            libros.push(new Libro(title, author, year, gender));

    }

}

const muestraLosLibros = () => {
    return console.log(libros);
}

const ordenarAutores = () => {
    let autoresOrdenados = []

    for (const libro of libros) {
        autoresOrdenados.push(libro.getAuthor());
    }

    console.log(autoresOrdenados.sort())
}

const showGender = () => {
    const gender = prompt('Enter gender to filter the books');

    for(libro of libros){
        if(gender == libro.getGender()){
            console.log(libro);
        }
        else{
        console.log(`Don´t exist books with gender ${gender}`)
        }
    }
}

muestraLosLibros();
ordenarAutores();
showGender();
