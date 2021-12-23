/* Es un objeto que dentro trae dos llamados a funciones */

const users = [
    {
        id: 1,
        name: 'Diego'
    },
    {
        id: 2,
        name: 'Karol'
    },
    {
        id: 3,
        name: 'Esteban'
    }
]

const emails = [
    {
        id: 1,
        email: 'diego479@gmail.com'
    },
    {
        id: 2,
        email: 'karol@gmail.com'
    }
]

const getUsers = (id)=>{
    const user = users.find(user => user.id == id)
    const promise = new Promise((resolve, reject) => {
        if(!user) reject(`Doesn´t exists an user with id ${id}`)
        else resolve(user)
    })
    return promise;
}

console.log(getUsers(1))
getUsers(2)
    .then(user => console.log(user))
    .catch(err => console.log(err))

const getEmail = (user) =>{
const email = emails.find(email => email.id==user.id)
return promise = new Promise((resolve, reject) => {
    if(!email) reject(`${user.name} hasn't email`)
    else resolve({
        id: user.id,
        name: user.name,
        email: email.email
    })
})

}

getUsers(3)
    .then(user => {
        return getEmail(user)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))