// const getName = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Diego1')
//         }, 1500)
//     })
    
// }

// // console.log(getName())

// // getName().then(name => console.log(name))

// const sayHello = async () => {
//     const name = await getName()
//     return `Hello ${name}`
// }

// sayHello().then(res => console.log(res))

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

const getUsers = async (id)=>{
    const user = users.find(user => user.id == id)
        if(!user) throw new Error(`Doesn´t exists an user with id ${id}`)
        else return user
    }

const getEmail = async (user) =>{
const email = emails.find(email => email.id==user.id)
    if(!email) throw new Error(`${user.name} hasn't email`)
    else return({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async(id) => {
    try
    {
        const user = await getUsers(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    }
    catch(error)
    {
        console.log(error)
    }
}
 
console.log(getInfo(1))//El resultado llega como una promesa y no con el valor requerido

getInfo(7).then(res => console.log(res))//de esta manera, con el .then, resuelve la promesa y muestra el resultado de la consulta

// getUsers(3)
//     .then(user => {
//         return getEmail(user)
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))