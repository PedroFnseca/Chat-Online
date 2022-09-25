import express from 'express'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'
import routes from './routes.js'

const app = express() // create express app
const server = http.createServer(app) // create http server
const __dirname = path.resolve() // get current directory
const io = new Server(server) // create socket.io server

const PORT = process.env.PORT || 4444 // get port from .env file or use 3000

app.use(express.static(path.join(__dirname, './public'))) // serve static files
app.set('views', path.join(__dirname, './public')) // set views directory

app.use('/', routes) // use routes

const messages = [] // array to store messages
var online = -1 // number of users online, -1 because not count first user

io.on('connection', (socket) =>{
    console.log('a user connected: ' + socket.id) // log when user connects
    online++ // increment number of users online

    io.emit('online', online)

    socket.on('userConnected', (room) => {
        socket.join(room) // join room
        const previousMessages = messages.filter(message => message.room == room)
        socket.emit('userConnected', previousMessages)
        console.log('user connected to room: ' + room)
    })

    // send message to all users
    socket.on('chatMessage', data => {
        io.to(data.room).emit('chatMessage', data) // send message to all users in room
        messages.push(data) // add message to array
    })

    socket.on('disconnect', () => { 
        console.log('user disconnected: ' + socket.id)
        online -= 1
        io.emit('online', online)
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})