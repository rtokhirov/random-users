const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

let mode = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;

if (mode) {
    body.classList.add('dark-mode')
    body.classList.add('dark-mode')
    lightBtn.classList.remove('hidden')
    darkBtn.classList.add('hidden')
}

darkBtn.addEventListener('click', () => {
    body.classList.add('dark-mode')
    lightBtn.classList.remove('hidden')
    darkBtn.classList.add('hidden')
    mode ? localStorage.setItem('mode', "") : localStorage.setItem('mode', 'dark')
})

lightBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode')
    darkBtn.classList.remove('hidden')
    lightBtn.classList.add('hidden')
    mode ? localStorage.setItem('mode', "") : localStorage.setItem('mode', 'dark')

})