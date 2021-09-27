let phrase = "Diego Alexander"

console.log(Array.from(phrase))
console.log(phrase.split(" "))

/** Funciones que pueden recibir Callbacks(Son funciones ejecutadas en otras funciones) */

    /* sort */
    const letters = ['c','r','i','s']
    console.log(letters.sort())

    //Por ordenar los arrays teniendo en cuenta la tabla de caracteres unicode, no es posible una ordenación adecuada de los números, requiriendo de una función o callback adicional dentro de la función sort
    const numbers = [1,10,7,5,19,7]
    console.log(numbers.sort())
    console.log(numbers.sort((a,b) => a-b))

    /* forEach */
    numbers.forEach((number) => console.log(number))
    numbers.forEach((number, index) => 
        console.log(`${number} está en la posición ${index}`))

    /* some y every*/
    const languages = ['Java', 'JavaScript', 'C#', 'Go']
    console.log(languages.some(language => language.length>7))
    console.log(languages.every(language => language.length>3))

    /* map */
    const numbersMap = [1,10,7,5,19,7]
    numbersMap.map(numberMap => console.log(numberMap*2))
    
    /* filter */
    const numbersFilter = [1,10,7,5,19,7]
    const numberFiltered = numbersFilter.filter(numbrF => numbrF > 9)
    console.log(numberFiltered)
    
    /* reduce */
    const numbersReduce = [1,10,7,5,19,7]
    console.log(numbersReduce.reduce((a,b) => a+b))

    const users = [
        {
            name: 'User1',
            online: true
        },
        {
            name: 'User2',
            online: false
        },
        {
            name: 'User3',
            online: true
        },
        {
            name: 'User4',
            online: true
        },
        {
            name: 'User5',
            online: false
        }
    ]

    const usersOnline = users.reduce((cont, user) => {
        if (user.online)
            cont++;
            return cont
        
    },0);
    
    console.log(`Hay ${usersOnline} usuarios conectados`)
    