
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) =>{ 
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=india').then((response) =>{
//     response.json().then((data) =>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.weather)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const searchLoc = document.querySelector('input')
const messageOne = document.querySelector('#msg-1')
const messageTwo = document.querySelector('#msg-2')

//  messageOne.textContent='wassup'

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()
    
    const location= searchLoc.value
    console.log(location)
    if(!location){
        messageOne.textContent= 'enter a location'
        messageTwo.textContent = ''
    }
    else{
        messageOne.textContent= 'loading...'
        fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response) =>{
            response.json().then((data) =>{
                if(data.error){
                    messageOne.textContent=data.error
                }
                else{
                    messageOne.textContent=data.location
                    messageTwo.textContent= data.weather
                }
            })
        })
    }
})
