import express from 'express'
import { config } from 'dotenv'
import { Server } from 'socket.io'

const io = new Server()

const app = express()
const PORT = process.env.PORT || 3333
config()

app.use('/', (req, res) => {
    res.sendFile('/', { root: './src/html' })
})

io.on('connection', (socket) => {
    console.log('a user connected');
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})