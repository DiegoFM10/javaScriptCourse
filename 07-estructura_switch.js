let num = 2

//Sintaxis simple
switch(num){
    case 1: console.log("Num tiene el valor de 1");
    break;
    case 2: console.log("Num tiene el valor de 2");
    break;
    case 3: console.log("Num tiene el valor de 3");
    break;
    default: console.log("Num no está dentro de los casos a evaluar");
}

//Sintaxis multiple encadenada
switch(num){
    case 1: 
    case 3: 
    case 5:
        console.log(`${num} es un impar entre 1 y 5`);
    break;
    case 2:
    case 4:
        console.log(`${num} es un par entre 1 y 5`);
    break;
    default: console.log("Num no está dentro de los casos a evaluar");
}