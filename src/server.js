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

io.on('connection', (socket) =>{
    console.log('a user connected: ' + socket.id) // log when user connects

    // send message to all users
    socket.on('chatMessage', (msg) => {
        console.log('message: ' + msg)
        io.emit('chatMessage', msg)
    })

    socket.on('disconnect', () => { 
        console.log('user disconnected: ' + socket.id)
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})