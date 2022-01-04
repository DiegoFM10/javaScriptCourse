/*
    API Web Storage:
    Los dos mecanismos en el almacenamiento web son:
  
        sessionStorage: mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos)
  
        LocalStorage: hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.

        Ambos funcionan con clave:valor y tienen dos métodos fundamentales:
            setItem() para asignar una clave:valor y
            getItem() que recibe como parámetro la clave de la que se quiere obtener el valor  
*/

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML += `<option>${ form.key.value }</option>`

    form.reset()
})

keys.addEventListener('change', () => {
    document.getElementById('infoValue').textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

sessionStorage.clear()