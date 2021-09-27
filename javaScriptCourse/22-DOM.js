/* document.getElementById('id') permite acceder a un documento a partir de su ID */
    const title = document.getElementById('title')

    title.textContent = 'DOM - Accediendo a nodos'

/* document | element .querySelector('selectorCSS') permite acceder al primer elemento que coincida con el selector CSS */
    const paragraph = document.querySelector('.paragraph')
    const paragraphDefined = document.querySelector('.paragraph:nth-child(2)')
    const span = paragraph.querySelector('span')

    console.log(paragraph);
    console.log(paragraphDefined);
    console.log(span.textContent);

/* document | element .querySelectorAll('selectorCSS') permite acceder a todos los elementos que coincidan con el selector CSS 
    devuelve un nodeList */

    const paragraphs = document.querySelectorAll('.paragraph')
    console.log(paragraphs)

    //EL selectorAll gener un nodeList y no un array, para cambiarlo a un array se requeriria alguna de las siguientes alternativas
    const paragraphArray = Array.from(document.querySelectorAll('.paragraph'))
    const paragraphSpread = [...document.querySelectorAll('.paragraph')]

        //como ya tenemos un array de los elementos, ya los podemos operar como tal para generar cambios u operaciones en los mismos
        paragraphArray.map(p => p.style.color='blue')
        paragraphSpread.map(p => p.style.border='2px solid red')