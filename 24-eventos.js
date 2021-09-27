const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')

/* Eventos de ratón */
    
    //Click
    button.addEventListener('click', () => {
        console.log('click');
    });
    
    //Doubleclick
    button.addEventListener('dblclick', () => {
         console.log('doble click')
    });

    //mouseenter
    box.addEventListener('mouseenter', () => {
        box.classList.replace('red', 'green');
    });
    //mouseenter
    box.addEventListener('mouseleave', () => {
        box.classList.replace('green', 'red');
    });
    //mousedown
    box.addEventListener('mousedown', () => {
        console.log("has dado click izquierdo")
    });
    //mouseup
    box.addEventListener('mouseup', () => {
        console.log("has soltado click izquierdo")
    });
    //mousemove
    box.addEventListener('mousemove', () => {
        console.log("has movido el cursor en la caja")
    });

/* Eventos de teclado */

    //keydown
    input.addEventListener('keydown', () => {
        console.log("Has pulsado una tecla")
    });
    //keydup
    input.addEventListener('keyup', () => {
        console.log("Has soltado una tecla")
    });
    //keydup
    input.addEventListener('keypress', () => {
        console.log("Estás presionando una tecla")
    });