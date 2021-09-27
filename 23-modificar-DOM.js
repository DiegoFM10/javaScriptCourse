/* Atributos */
    const title = document.getElementById('title')
    const nombre = document.getElementById('name')
    
    console.log(nombre.getAttribute('type'))
    
    //Cambiar atributos
    nombre.setAttribute('type','number');
    console.log(nombre)
    
    /* Clases */
    
    title.classList.add('main-title', 'other-title')
    title.classList.remove('other-title')
    
    if (title.classList.contains('title')) {
        console.log('Title tiene la clase title')
    }
    else{
        console.log('Title no tiene la clase title')
    }

    title.classList.replace('main-title', 'new-title')

    console.log(title)
    console.log(nombre)