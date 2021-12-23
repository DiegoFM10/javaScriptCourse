/* Protoco HTTP y códigos de estado de respuesta HTTP */

const button = document.getElementById('button')
const list = document.getElementById('list')

//Se lanza petición AJAX al navegador para evitar tener que utilizar y descargar la libreria de jquery - lineas 7-9
button.addEventListener('click', () => {
    let xhr //xhr es el nombre estandar del objeto para llamar esta validación
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest() //consulta si en la versión del navegador existe el objeto XMLHttpRequest
    else xhr = new ActiveXObject('Microsoft.XMLHTTP') // Esta línea crea el objeto XMLHttpRequest para navegadores que no lo soporten
    
    //Se realiza la petición al servidor del que se solicita
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    
    //Se ejecutan las acciones de respuesta definidas
    xhr.addEventListener('load', (data) => {
        //Se obtienen los datos de la respuesta y se castean a un array de objetos en formato JSON
        const dataJson = JSON.parse(data.target.response)

        //Se recorre el array y se insertan los datos en la etiqueta 'UL' como 'li', mostrando el id y el nombre
        for (const userInfo of dataJson) {
            let listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })
        
    //Se envía la petición a nuestro servidor
    xhr.send()
})


