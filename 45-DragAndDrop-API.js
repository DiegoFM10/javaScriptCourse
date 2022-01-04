/**
    API drag & drop:

    Existen dos partes principales en esta API, el objeto arrastrar y la zona donde vamos a dejarlo

    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar: 
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto

        Zona de destino:
            dragenter: Se diapra cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragLeave: Se dispara cuando el objeto sale de la zona de destino 
 */

const visor = document.getElementById('visor')
const dropZone = document.getElementById('drop-zone')

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    console.log('Drag Over')
})

dropZone.addEventListener('drop', (e) => {
    console.log('Drop')
})