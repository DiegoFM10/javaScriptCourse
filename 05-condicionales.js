let num = 5;
let num2 = -2;

//Condicional simple
if(num > 0) console.log(`${num}: es mayor que 0`);


//Condicional compuesto
if(num > 0){
    console.log(`${num}: es mayor que 0`);
}
else{
    console.log(`${num}: es menor que 0`);
}

//Condicional multiple
if(num > 0){
    console.log(`${num}: es mayor que 0`);
}
else if(num < 0){
    console.log(`${num}: es menor que 0`);
}
else {
    console.log(`${num}: es igual que 0`);
}

//Condicional con cadenas
let word = "hola";

if (word.length > 4){
    console.log(`${word} tiene más de 4 carácteres.`)
}
else if(word.length == 4){
    console.log(`${word} tiene 4 carácteres.`)
}
else{
    console.log(`${word} tiene menos de 4 carácteres.`)
}

//Condicional con booleanos
let respuesta = true
let respuesta2 = false

    //Forma 1
    if(respuesta == true) console.log("Respuesta es igual a True")
    if(respuesta2 == false) console.log("Respuesta es igual a False")
    
    //Forma 2 - forma más usada
    if(respuesta) console.log("Respuesta es igual a True")
    if(!respuesta2) console.log("Respuesta es igual a False")

//Condicional con operadores lógicos
if(num > 0 && num2 >0){
    console.log(`${num} y ${num2}: son mayores que 0`);
}
else if(num < 0 && num2 <0){
    console.log(`${num} y ${num2}: son menores que 0`);
}
else {
    console.log(`${num} y ${num2}: son diferentes de 0`);
}

