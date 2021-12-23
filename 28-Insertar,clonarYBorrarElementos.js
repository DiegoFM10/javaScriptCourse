const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"
const newElement2 = document.createElement('li')
newElement2.textContent = "I'm a new element2"
const newElement3 = document.createElement('li')
newElement3.textContent = "I'm a new element3"

/* Insertar elementos */
    // parent.InsertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia
        list.insertBefore(newElement, list.children[0])

    //Insertar con posiciones utilizaondo insertAdjacentElement(posición, texto)
        // list.children[0].insertAdjacentElement('beforebegin', newElement2)
        list.insertAdjacentElement('afterbegin', newElement2)
        // list.insertAdjacentElement('beforeend', newElement3)
        list.children[0].insertAdjacentElement('afterend', newElement3)

    //Remplazar elementos   
        list.replaceChild(newElement, list.children[2])

/* Clonar y eliminar elementos */

    const clon = list.after(list.cloneNode(true));//Clona el nodo. true - clona el elemento con los hijos, false - clona solo el elemento sin hijos
    // list.remove()// Elimina el nodo
    list.removeChild(list.children[0])//Elimina el hijo
