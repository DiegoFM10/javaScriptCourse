const file = document.getElementById('file')
const progress = document.getElementById('progress')

// file.addEventListener('change', (e) => {
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//     fileReader.addEventListener('progress', (e) => {
//         // console.log(e.loaded * 100 / e.total)
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%';
//     })
//     //Este nuevo evento se agrega para navegadores como firefox que no cargan el progreso al 100% con el evento 'progress',
//     fileReader.addEventListener('loadend', (e) => {
//         progress.style.width = '100%';
//     })
// })

const root = document.documentElement

file.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })
    //Este nuevo evento se agrega para navegadores como firefox que no cargan el progreso al 100% con el evento 'progress',
    fileReader.addEventListener('loadend', (e) => {
        root.style.setProperty('--bar-width', '100%')
    })
})



