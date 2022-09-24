var socket = io();

var form = document.getElementById('form-message')
var input = document.getElementById('message-input')
var messagesContainer = document.getElementById('messages-container')
var userName = localStorage.getItem('username')
var id = localStorage.getItem('id')
var scroll = document.querySelector('.scrollBar')
var room = window.location.pathname.split('/')[1]
input.focus()

if (!userName){
  window.location.href = '/'
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (input.value) {

        const date = new Date()
        var minutes = date.getMinutes()
        var hours = date.getHours()

        if (minutes.toString().length == 1){
            minutes = `0${minutes}`
        }
        const time = `${hours}:${minutes}` 

        data = {
            username: userName,
            message: input.value,
            time: time,
            room: room,
            id: id
        }

        socket.emit('chatMessage', data)
        input.value = '';
    }
})

// Entra na sala
socket.emit('userConnected', room)

socket.on('chatMessage', (message) => {
    var li = document.createElement('li')
    li.classList.add('message')
    console.log(message)

    if(message.id == id){
        li.innerHTML = `<div class="my-message"><div class="minhas-mensagens"><span class="message-content">${message.message}</span> <span class="message-time">${message.time}</span></div></div>`
    }else{
        li.innerHTML = `<div class="others-message"><span class="message-username">${message.username}</span><div class="outras-mensagens">  <span class="message-content">${message.message}</span> <span class="message-time">${message.time}</span></div></div>`
    }

    messagesContainer.appendChild(li)

    scroll.scrollTop = scroll.scrollHeight
})

socket.on('userConnected', (messages) =>{
    messagesContainer.innerHTML = ''
    messages.forEach(message => {
    var li = document.createElement('li')
    li.classList.add('message')

    if(message.id == id){
        li.innerHTML = `<div class="my-message"><div class="minhas-mensagens"><span class="message-content">${message.message}</span> <span class="message-time">${message.time}</span></div></div>`
    }else{
        li.innerHTML = `<div class="others-message"><span class="message-username">${message.username}</span><div class="outras-mensagens">  <span class="message-content">${message.message}</span> <span class="message-time">${message.time}</span></div></div>`
    }

    messagesContainer.appendChild(li)
    })

    scroll.scrollTop = scroll.scrollHeight
})