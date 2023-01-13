const form = document.getElementById('form')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const clearBtn = document.getElementById('clear__button')
const resetBtn = document.querySelector('.resetBtn')
const searchInp = document.querySelector('.form__input')


getDate((err, data) => {
    post(data.results)
}, API);


searchInp.addEventListener('input', () => {
    let inputVal = searchInp.value.toLowerCase()
    let users = document.querySelectorAll('.user__name')
    users.forEach(element => {
        if (element.lastElementChild.textContent.toLowerCase().includes(inputVal)) {
            element.parentElement.classList.remove('hidden')
        } else {
            element.parentElement.classList.add('hidden')
        }
    })
})





function post(members) {
    members.forEach(element => {
        user.innerHTML += `
        <li class="user__item">
            <button  id="delete__btn" class="user__delete--btn">
                <i id="delspan" class="fas fa-trash"></i>
            </button>
            <img class="user__img" alt="User photo" src="${element.picture.large}" width="100" height="100" />
            <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span class="userName">- ${element.name.title} ${element.name.first} ${element.name.last}</span>
            </div>
            <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${element.dob.age} years old.</span>
            </div>
            <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-${element.location.city}, ${element.location.country}</span>
            </div>
            <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${element.gender}</span>
            </div>
        </li>`
    });
    deleteuser()
}

function deleteuser() {
    const userList = document.querySelectorAll('.user__item')
    const deleteBtns = document.querySelectorAll('.user__delete--btn')
    deleteBtns.forEach(element => {
        element.addEventListener('click', () => {
            element.parentElement.remove()
            if (user.innerHTML.length <= 100) {
                clearBtn.style.display = 'none'
            };
        })
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})



resetBtn.addEventListener('click', () => {
    user.innerHTML = ''
    overlay.classList.remove('hidden')
    clearBtn.classList.remove('hidden')
    clearBtn.style.display = 'block'
    getDate((err, data) => {
        post(data.results)
    }, API)
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    clearBtn.style.display = 'none'
    e.preventDefault()
    user.innerHTML = ""
})