const overlay = document.getElementById('overlay')
const API = 'https://randomuser.me/api/?results=9'


function getDate(callback, resourse) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            callback(undefined, JSON.parse(request.responseText))
            overlay.classList.add('hidden')
        } else if (request.readyState == 4) {
            callback('Something wrong! :(', undefined)
        }
    })
    request.open(('get'), resourse)
    request.send();
}