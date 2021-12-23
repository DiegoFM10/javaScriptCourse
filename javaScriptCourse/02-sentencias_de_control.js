let condicion = false;

//Condicional ordinario
if(condicion){
    console.log("Condición verdadera")
}
else{
    console.log("Condición falsa")
}

/**condicional con operador ternario "? = a partir de este simbolo, viene la opción verdadera"
    ": = a partir de este simbolo viene la opción falsa " */
condicion ? console.log(true) : console.log(false);

//Condicional para saber la estación del año
let mes = 7
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "invierno"
}
else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "primavera"
}
else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "verano"
}
else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "otoño"
}
else{
    estacion = "valor incorrecto"
}

console.log(estacion)


let hora = 9;
let abreviatura = "pm";

if(hora >= 6 && hora <= 11 && abreviatura == "am"){
    console.log("Buenos días")
}
else if(hora < 6 && abreviatura == "am"){
    console.log("Durmiendo")
}
else if(hora >= 12 || hora <= 6 && abreviatura == "pm"){
    console.log("Buenas tardes")
}
else if(hora >= 7 && hora <= 12 && abreviatura == "pm"){
    console.log("Buenas noches")
}