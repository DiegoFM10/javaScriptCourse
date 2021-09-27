let a = 51;
let b = 78;
let c = 70;

console.log(`Los números son: ${a}, ${b}, ${c}.`)

if (a > b && a > c){
    if (b > c){
        console.log(`El orden de los números es: ${a}, ${b}, ${c}.`)
    }
    else{
        console.log(`El orden de los números es: ${a}, ${c}, ${b}.`)
    }
}
else if (b > a && b > c){
    if (a > c){
        console.log(`El orden de los números es: ${b}, ${a}, ${c}.`)
    }
    else{
        console.log(`El orden de los números es: ${b}, ${c}, ${a}.`)
    }
}
else if (c > a && c > b){
    if (a > b){
        console.log(`El orden de los números es: ${c}, ${a}, ${b}.`)
    }
    else{
        console.log(`El orden de los números es: ${c}, ${b}, ${a}.`)
    }
}