/**
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda. 
        principalmente utilizada para la busqueda de patrones de cadenas
        de caracteres u operaciones de sustituciones.
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
        
    Sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después de la primera coincidencia.

    Comodines:
        -Sustitución: Define un comodin dentro del patrón. El simbolo es el "."

        -Listado de caracteres validos: Entre corchetes se pone una lista de los caracteres validos.
            [aeiou] Con esto cogeriamos todas las vocales

        -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z]
            Todas las letras minúsculas.
            Tabla ASCII - https://ascii.cl/es/

        -Mezcla entre rangos y listas: 
            Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serian números del 0 al 5,
            la letra "o" y la letra "u"

        -Cadenas completas:
            Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras
            irán separadas por un pipe. (lorem|amet) es valida la palabra "lorem" yla palabra "amet".

    Delimitadores:
        ^ Antes de este simbolo no puede haber nada
        $ Después de este simbolo no puede haber nada
            ^hola$

    Cantidad:
        - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. hay tres combinaciones posibles.
            {n} Se tiene que repetir n veces.
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir como mínimo n veces, sin máximo.
                ^[a-zA-Z]{1,3}@{1}$
        - asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.
            .*@.*\..*
            A-[0-9]*
        - interrogación: lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
            ^[ae]?$
        - operador +: lo que está antes del + tiene que estar una vez como mínimo
            A-[0-9]+

    Caracteres:
        \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de línea y
        retorno de carro.
            ^[a-zA-Z]+\s[a-zA-Z]+$
        \S: Coincide con todo menos caracteres de espacio
            ^\S{5}$
        \d: Coincide con un carácter númerico.
            (Equivalente a [0-9]) ^\d{5}$
        \D: Coincide con cualquier carácter no númerico.
            (Equivalente a [0-9]) ^\D{5}$
        \w: Coincide con cualquier carácter alfanúmerico, incluyendo el guión bajo.
            (Equivalente a [A-Za-z0-9_]) ^\w+@$
        \W: Coincide con todo menos caracteres de palabra.
            ^\W+$

 */

const text = document.getElementById('text').textContent
const regEx = /lorem/gi

console.log(regEx.test(text))
