const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

input.addEventListener('keyup', (e) => {
    console.log(e.key);
});

addEventListener('click', (e) => {
    console.log(e)
});

button.addEventListener('click', (e) => {
    console.dir(e.target)
})

form.addEventListener('submit', (e) => {
    e.preventDefault();//Se utiliza para que un elemento no realice la acción predeterminda
    console.log('El formulario se ha enviado')
});

const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e) => {
    e.target.classList.add('cyan');
})