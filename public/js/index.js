window.onload = () => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    var socket = io()
    const usernameInput = document.getElementById('username-input')
    const form = document.querySelector('form')
    const okBtn = document.getElementById('ok-btn')
    const spanOnline = document.getElementById('online')
    const room = document.getElementById('room-input')
    
    socket.on('online', (online) => {
        spanOnline.innerHTML = `${online} online`
    })
    
    usernameInput.focus()
    
    // Gera um id Aleatório
    function generateId(){
        const d = new Date()
        return d.getDate() * d.getMilliseconds() + d.getSeconds() + d.getMinutes() 
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (usernameInput.value) {
            const username = capitalizeFirstLetter(usernameInput.value)
            
            const name = localStorage.getItem('username')
            const id = generateId()
    
            // Caso o nome seja diferente ele altera o id
            if(!name || name != username){
                localStorage.setItem('username', username)
                localStorage.setItem('id', id)
            }
    
            if(room.value == '') {
                window.location.href = '/geral'
            } else{
                window.location.href = `/${room.value}`
            }
        } else{
            alert('Digite um nome de usuário!')
        }
    })
    
    function keyUpHandler(e) {
        if (e.key === 'Enter') {
            okBtn.click();
        }
    }
}