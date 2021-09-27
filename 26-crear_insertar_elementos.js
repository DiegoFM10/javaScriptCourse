const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

//Crear elementos
    
    /*Escribir HTML en un elemento, no siempre es la mejor opción para insertar elementos al DOM, 
    por la sobrecarga que puede generar*/
        title.innerHTML = 'DOM - <span>Crear e Insertar Elementos I</span>'

    /* Insertar fragmentos de código que evitan que la página quede más pesada
     al momento de insertar varios elementos*/
        const fragment = document.createDocumentFragment()

        // for(const day of days){
        //     const itemList = document.createElement('LI')
        //     itemList.textContent = day //Escribir texto en un elemento
        //     fragment.appendChild(itemList)
        // }

        // daysList.appendChild(fragment)
        
        for (const day of days) {
            const selectItem = document.createElement('OPTION')
            selectItem.setAttribute('value', day.toLowerCase())
            selectItem.textContent = day
            fragment.appendChild(selectItem)
        }

        selectDays.appendChild(fragment)