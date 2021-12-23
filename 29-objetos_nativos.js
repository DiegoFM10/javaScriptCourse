const button = document.getElementById('button')
const button2 = document.getElementById('button2')

const person = {
    name: 'Diego',
    age: 28,
    email: 'diego.fuentes@finanzauto.com.co'
}

/* Objeto window - de él decienden todos los objetos*/

  /*   alert(`Hola ${person.name}`)
    prompt('Escriba su nombre') */

  /*   if(confirm('Acepta?')){
        console.log('El usuario aceptó')
    }else{
        console.log('El usuario no aceptó')
    } */

    //No es buena idea utilizar estos elementos al cargar la página, porque impiden su ejecución hasta que no se confirme la acción de la ventana emergente

/* Objeto console - Es el objeto que contiene la consola del navegador */

/*     console.log(person.name)
    console.dir(person.age)
    console.error('Error!')
    console.table(person) */

/* Objeto location - Es el objeto que contiene la barra de direcciones */

    console.log(location.href)// con este comando se pueden redirigir las páginas desde javaScript
    // location.href = 'https://google.com'
    console.log(location.protocol)
    console.log(location.host)
    console.log(location.pathname)
    console.log(location.hash)
    // console.log(location.reload())

/* Objeto history */

   /*  
    history.back() // devuelve al usuario a la pagina anteriormente visitada en la misma pestaña 
    history.forward() // lleva al usuario a la pagina hacia adelante, visitada en la misma pestaña
    history.go(-2) // devuelve o lleva al usuario a la pagina visitada en la misma pestaña dependiendo del número
    history.length() // muestra la cantidad de páginas visitadas en la misma pestaña
   */

/* Objeto date */ 
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
    const date = new Date();
    console.log(date.getDate())
    console.log(date)

/* Timers */
    //setTimeout - para ejecutar un evento en cierto tiempo
        button.addEventListener('click', () => {
            setTimeout(saludar,3000)//3000 equivale a 3 segundos
        })

        const saludar = () => {
            console.log('Hola')
        }

    //setInterval - para ejecutar una instrucción cada cierto tiempo
        let cont = 0

        const interval = setInterval(() => {
            console.log(cont)
            cont++
        }, 1000)//Contador de segundos

    //clearInterval - para detener una ejecución
        button2.addEventListener('click', () => {
            clearInterval(interval)
        })