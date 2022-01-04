/* DOM - traversing */

const parent = document.getElementById('parent')

//Mostrar nodos padre o nodos elementos padre
    console.log(parent.parentElement);//parentElement muestra el nodo elemento padre o contenedor del elemento o nodo que consultamos

//Mostrar nodos hijo o nodos elementos hijo
    console.log(parent.childNodes)//Devuvlve todos los nodos hijos
    console.log(parent.children)//Devuelve todos los nodos elementos hijos
    console.log(parent.firstChild)//Devuelve el primer nodo hijo
    console.log(parent.firstElementChild)//Devuelve el primer nodo elemento  hijo

    console.log(parent.hasChildNodes())

//Mostrar nodos hermanos
    console.log(parent.nextSibling)
    console.log(parent.parentElement.nextElementSibling)/*Se agrega el parentElement, porque el elemento ul, 
    no cuenta con hermanos(etiquetas o elementos al mismo nivel), mientras que el elemento nav si;
    la validación la realiza buscando el siguiente elemento desde su punto*/
    console.log(parent.previousSibling)
    console.log(parent.parentElement.previousElementSibling)//la validación la realiza buscando el anterior elemento desde su punto
    