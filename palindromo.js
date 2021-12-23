let cadena = "abac"
let cadena2 = "caac"

function espalindromo (texto){
  let arregloCadena = [...texto]
  let cadenaValidacion = []
  for (let i = arregloCadena.length-1; i >= 0; i--){
    cadenaValidacion.push(arregloCadena[i])
  }
  return JSON.stringify(cadenaValidacion) === JSON.stringify(arregloCadena)

}

console.log(espalindromo(cadena))
console.log(espalindromo(cadena2))
