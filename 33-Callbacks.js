/* Los callbacks son funciones que se ejecutan a tráves de otra función */
// Los callbacks no son asíncronos

const getUser = (id, cb) =>{
    const userE = {
        name: 'Diego',
        id:id// se puede escribir solo como id
    }
    if(id==2) cb('User not exist')
    else cb(null, userE)
}

getUser(1, (err, userE) =>{
    if(err) return console.log(err)
    console.log(`Username is ${userE.name}`);
})

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

const getUsers = (id,cb)=>{
    const user = users.find(user => user.id == id)
    if(!user) cb(`Not exists a user with id ${id}`)
    else cb(null, user)
}

const getEmail = (user,cb) =>{
    const email = emails.find(email => email.id==user.id)
    if(!email) cb(`${user.name} hasn't email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}

getUsers(3, (err, user) => {
    if(err) return console.log(err)
    getEmail(user, (err, res)=>{
        if(err) return console.log(err)
        console.log(res);
    })
})
