let numeros = [1,2,3,4,5];

/* Método .length */

console.log(numeros.length);

/* Propiedades Arrays*/ 
//Array.isArray(variable a evaluar) devuelve si la variable es un array
let number = 4;
console.log(Array.isArray(number));
console.log(Array.isArray(numeros));

//Eliminar un elemento, shift al inicio - pop al final
numeros.shift();
console.log(numeros);
numeros.pop();
console.log(numeros);

//Añadir elementos a un array, push al final - unshift al inicio
numeros.push(7);
console.log(numeros);
numeros.unshift(7);
console.log(numeros);

//Buscar elementos
console.log(numeros.indexOf(7));
console.log(numeros.lastIndexOf(7));

//Mostrar elementos al reves
console.log(numeros.reverse());

//Método join, para mostrar de los elementos separadores en el array
console.log(numeros.join("-"))
console.log(numeros.join("."))
console.log(numeros.join())
console.log(numeros.join(""))

//método splice, para eliminar desde una posición dada, hasta cierta cantidad de elementos o el final del array por defecto
console.log(numeros.splice(4));
console.log(numeros);
console.log(numeros.splice(1,1));
console.log(numeros);
console.log(numeros.splice(1,1,7,5,10,19));//Principalmente para remplazar elementos a partir de una posición
console.log(numeros);
console.log(numeros.splice(6,0,8,2));//Al agregar 0 en la segunda posición añade los valores a partir del indice en el primer elemento
console.log(numeros);

//método slice para extraer elementos de un array desde un indice dado
let newNumbers = numeros.slice();
console.log(numeros);
console.log(newNumbers);

let newNumbers2 = numeros.slice(3);
console.log(numeros);
console.log(newNumbers2);

let newNumbers3 = numeros.slice(1,5);
console.log(numeros);
console.log(newNumbers3);
