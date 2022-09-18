import express from 'express'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'
import { config } from 'dotenv'
import routes from './routes.js'

config() // load .env file
const app = express() // create express app
const server = http.createServer(app) // create http server
const __dirname = path.resolve() // get current directory
const io = new Server(server) // create socket.io server
const PORT = process.env.PORT || 3333 // get port from .env file or use 3000

app.use(express.static(path.join(__dirname, './public'))) // serve static files
app.set('views', path.join(__dirname, './public')) // set views directory

app.use('/', routes) // use routes

const messages = [] // array to store messages

io.on('connection', (socket) =>{
    console.log('a user connected: ' + socket.id) // log when user connects

    socket.emit('userConnected', messages) // send previous messages to user

    // send message to all users
    socket.on('chatMessage', data => {
        console.log(data.username + ': ' + data.message) // log message
        io.emit('chatMessage', data)
        messages.push(data) // add message to array
    })

    socket.on('disconnect', () => { 
        console.log('user disconnected: ' + socket.id)
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})