/** Spread Operator 
   su sintaxis es ...
*/
    /* Mostrar elementos de un array */
        const numbers = [7, 5, 10, 19, -5, 2, 3, -15]
        console.log(...numbers)

    /* Operar con elementos de un array */
        const addNumbers = (a, b, c) => {
            console.log(a+b+c);
        }

        let numbersToAdd = [1,2,3]

        // addNumbers(numbersToAdd)//inserta el array en el param. a, dejando como undefined los parametros siguientes
        addNumbers(...numbersToAdd)//al aplicar el SpreadOperator se incluye cada valor en cada parametro requerido en la función

    /* Añadir elementos de un array a otro */
        let newUsers = ['Diego', 'Karol', 'Cristopher']
        let users = ['Alexander', 'Dayana', 'Esteban']

        users.push(...newUsers)
        console.log(users)

    /* Copiar arrays */ 
        let arr1 = [1,2,3,4]
        let arr2 = [...arr1]

        console.log(arr2)

    /* Concatenar arrays */ 
        let arre1 = [1,2,3,4]
        let arre2 = [5,6,7]

        // let arreConcat = arre1.concat(arre2)
        let arreConcat = [...arre1, ...arre2]
        console.log(arreConcat)

    /* Enviar un número indefiniod de argumentos a una función 
        (Parámetros REST) */
        const restParams = (...numbersParam) => {
            console.log(numbersParam)
        }

        restParams(12,32,5,4,8,4,7,5,1,548,187,45)

    /* Libreria Math */
        console.log(Math.max(numbers))//sin el spreadOperador no puede realizar la operación en arrays
        console.log(Math.max(...numbers))
        console.log(Math.min(...numbers))

    /* Eliminar elementos duplicados */
        const numbersWithDuplicates = [12,7,5,10,25,12,25]
        console.log(new Set(numbersWithDuplicates))//El objeto Set por si solo no permite elementos duplicados en un array, pero no los organiza como array sin el spreadOperator
        console.log([...new Set(numbersWithDuplicates)])
