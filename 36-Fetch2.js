/** FETCH API
    para hacer peticiones POST, fetch admite un segundo parámetro

    fetch (url, {
        method: 'POST',
        body: Los datos que enviamos, Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
        }
    }
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit perspiciatis recusandae explicabo, a ex voluptatem totam adipisci blanditiis porro, amet minima odit animi dignissimos fugiat. Odio consequatur iure aperiam, sequi, corrupti porro temporibus, asperiores assumenda dicta sed deserunt omnis similique deleniti. Eum doloremque accusamus aut repellendus expedita nostrum incidunt?',
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
    .then(data => console.log(data))
    // console.log(newPost)
    // console.log(JSON.stringify(newPost))
})