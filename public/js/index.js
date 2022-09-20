function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const usernameInput = document.getElementById('username-input')
const form = document.querySelector('form')
const okBtn = document.getElementById('ok-btn')
const spanOnline = document.getElementById('online')
var socket = io()

socket.on('online', (online) => {
    spanOnline.innerHTML = `${online} online`
})

usernameInput.focus()

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput.value) {
        const username = capitalizeFirstLetter(usernameInput.value)
        localStorage.setItem('username', username)
        window.location.href = '/chat'
    } else{
        alert('Digite um nome de usuário!')
    }
})

function keyUpHandler(e) {
    if (e.key === 'Enter') {
        okBtn.click();
    }
}