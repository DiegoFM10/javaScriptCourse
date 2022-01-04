const button = document.getElementById('button')

button.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {
            title: 'A new post',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit perspiciatis recusandae explicabo, a ex voluptatem totam adipisci blanditiis porro, amet minima odit animi dignissimos fugiat. Odio consequatur iure aperiam, sequi, corrupti porro temporibus, asperiores assumenda dicta sed deserunt omnis similique deleniti. Eum doloremque accusamus aut repellendus expedita nostrum incidunt?',
            userId: 1
        }
    }).then(res => console.log(res.data))
    .catch(err => console.log(err))
})
