var socket = io();

var form = document.getElementById('form-message')
var input = document.getElementById('message-input')
var messagesContainer = document.getElementById('messages-container')
var userName = localStorage.getItem('username')
var scroll = document.querySelector('.scrollBar')

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
      time: time
    }

    socket.emit('chatMessage', data)
    input.value = '';
  }
})

socket.on('chatMessage', (message) => {
  var li = document.createElement('li')
  li.classList.add('message')
  li.innerHTML = `<span class="message-username">${message.username}</span><div class="mensagem">  <span class="message-content">${message.message}</span> <span class="message-time">${message.time}</span></div>`
  messagesContainer.appendChild(li)

  scroll.scrollTop = scroll.scrollHeight
})

socket.on('userConnected', (messages) =>{
  messagesContainer.innerHTML = ''
  messages.forEach(message => {
    var li = document.createElement('li')
    li.classList.add('message')
    li.innerHTML = `<span class="message-username">${message.username}</span><div class="mensagem">  <span class="message-content">${message.message}</span> <span class="message-time">${message.time}</span></div>`
    messagesContainer.appendChild(li)
  })

  scroll.scrollTop = scroll.scrollHeight
})