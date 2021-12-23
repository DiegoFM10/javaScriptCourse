let num = 10;

/*Operador ternario*/
/**condicional con operador ternario "? = a partir de este simbolo, viene la opción verdadera"
    ": = a partir de este simbolo viene la opción falsa " */

// Forma con una sentencia
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

// Forma con varias sentencias
(num % 2 == 0) ? 
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
    : 
    (
        console.log(`${num} es impar`),
        console.log(`${num} es impar 2`)

    );

// no es necesario agregar la misma cantidad de sentencias si es verdadero o falso
let num2 = 7;
(num2 % 2 == 0) ? 
(
    console.log(`${num2} es par`),
    console.log(`${num2} es par 2`)
)
: 
    console.log(`${num2} es impar`);