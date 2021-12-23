/** FETCH API
    Proporciona una interfaz de JS para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica 
    de obtener recursos de forma asíncrona por la red.

    Está basado en promesas, por lo que tiene un response y un reject internos.
*/

// Forma de validar si el fetch funciona en el navegador
// button.addEventListener('click', () => {
//     if(window.fetch != undefined) console.log('FETCH OK')
//     else console.log('FETCH NOT WORKS')
// })

const button = document.getElementById('button')

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
        .catch(err => (err))
})