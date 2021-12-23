const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    getData(characters.children[characters.selectedIndex].value)

})

const getData = (id) => {
    let xhr 
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest() 
    else xhr = new ActiveXObject('Microsoft.XMLHTTP')

    if (id==undefined) {
        xhr.open('GET', `31-ajax2.php?id=${id}`)

        xhr.addEventListener('load', (data) => {
            const dataJson = JSON.parse(data.target.response)
        
        const fragment = document.createDocumentFragment()

        for(const heroes of dataJson){
            const row = document.createElement('TR')
            const dataName = document.createElement('TD')
            const dataAlignment = document.createElement('TD')
            const dataHomeTown = document.createElement('TD')
            const dataGender = document.createElement('TD')
            const dataFighting = document.createElement('TD')
            dataName.textContent = heroes.Name
            dataAlignment.textContent = heroes.Alignment
            dataHomeTown.textContent = heroes.HomeTown
            dataGender.textContent = heroes.Gender
            dataFighting.textContent = heroes.Fighting

            row.append(dataName)
            row.append(dataAlignment)
            row.append(dataHomeTown)
            row.append(dataGender)
            row.append(dataFighting)

            fragment.append(row)
        }
        if(table.children[1]){
            table.removeChild(table.children[1])
        }
        table.append(fragment)
        })

    } else {
         xhr.open('GET', '31-ajax2.php')

        xhr.addEventListener('load', (data) => {
            const dataJson = JSON.parse(data.target.response)
            console.log(dataJson)
        
        const fragment = document.createDocumentFragment()

        for(const heroes of dataJson){
            const option = document.createElement('OPTION')
            option.setAttribute('value', heroes.ID)
            option.textContent = heroes.Name
            fragment.append(option)
        }

        characters.appendChild(fragment)
        })
    }

    xhr.send()
}

getData()