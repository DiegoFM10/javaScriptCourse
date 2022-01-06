const fileInput = document.getElementById('file')
const dropZone = document.getElementById('drop-zone')
const root = document.documentElement
const loadBar = document.getElementById('load-bar')
const paragraph = document.getElementById('drop--zone')
const icon = document.documentElement

fileInput.addEventListener('change', (e) => {
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
    fileReader.addEventListener('load', (e) => {
        img.classList.remove('hide')
        img.setAttribute('src', e.target.result)
    })
})

dropZone.addEventListener('click', () => {
    fileInput.click()
    loadBar.classList.remove('hide-bar')
})

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(
        dropZone.classList.add('drop-zone--active')
    )
})

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
})
