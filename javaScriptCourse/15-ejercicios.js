import prompt from 'prompt';

/** 1. Solicita un nombre, la edad y muestra por consola el mensaje "Hola ___, tienes_____ años y el año que viene tendrás ____ años" */

let name = prompt('Enter your name');
let age = prompt('Enter your age');

let nextAge = parseInt(age)+1;

console.log(`Hola ${name}, tienes ${age} años y el año que viene tendrás ${nextAge}`);
console.log(`Hola ${name}, tienes ${age} años y el año que viene tendrás ${parseInt(age)+1}`);

/** 2. Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo, y círculo. En primer lugar se pregunta de que figura se quiere calcular el área, despues solicita los datos para calcularlo" */

let figura = prompt('Enter the name of geometric figure thats you need know its area')

if(figura === "triangle"){
    let triangleArea;
    let base = prompt('Enter the base');
    let height = prompt('Enter the height');

    triangleArea = base * (height/2);

    console.log(triangleArea);
}
else if(figura === "rectangle"){
    let rectangleArea;
    let base = prompt('Enter the base');
    let height = prompt('Enter the height');

    rectangleArea = base*height;

    console.log(rectangleArea);
}
else if(figura === "circle"){
    let circleArea;
    let pi = Math.PI;
    let radius = prompt('Enter the radius');

    circleArea = pi * Math.pow(radius,2);

    console.log(circleArea);
}
else{
    console.log('Wrong figure')
}

/** 3. Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no" */

let num = parseInt(prompt('Enter a number higher than 1'));
let divisores = 0;

if(num === 1 ) console.log('The number 1, is not valid number')
else{
    for(let i=2; i<num; i++){
        if(num % i == 0){
            console.log(`${num} / ${i} = ${num/i} No es primo`);
            divisores++;
            break
        }
    }
}

if(divisores == 0) console.log(`${num} es primo`)