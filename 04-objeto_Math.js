let numero1 = 10
let numero2 = -7
let numero3 = 5.56

console.log(Math.E)
console.log(Math.PI)

//Valor absoluto
console.log(Math.abs(numero1))
console.log(Math.abs(numero2))

//Redondeo decimales al número por encima
console.log(Math.ceil(numero2))
console.log(Math.ceil(numero3))

//Redondeo decimales al número por debajo
console.log(Math.floor(numero3))

//Exponentes
console.log(Math.pow(numero1,3))

//Número aleatorio entre 0 y 1
console.log(Math.random())
console.log(Math.random()*10) //Numero aleatorio entre 0 y 10
console.log(Math.round(Math.random()*100)) //Número aleatorio sin decimales
//console.log(Math.round(Math.random()* (numMax - numMin) + numMin)) //Número aleatorio sin decimales entre dos números
console.log(Math.round(Math.random()* (10 - 5) + 5)) //Número aleatorio sin decimales entre 5(excluyendo 5) y 10(incluyendo 10)

//Devuelve si el número es negativo(-1), positivo(1) o si es neutro(0)
console.log(Math.sign(7))
console.log(Math.sign(-7))
console.log(Math.sign(0))

//Devuelve la raiz cuadrada de un número
console.log(Math.sqrt(25))
console.log(Math.sqrt(10))
