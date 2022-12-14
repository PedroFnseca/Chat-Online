import express from 'express'
import path from 'path'

const __dirname = path.resolve() // get current directory

const Router = express.Router()

Router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

Router.get('/:room', (req, res) => {
    res.sendFile(__dirname + '/public/pages/chat.html')
})

Router.use('*', (req, res) => {
    res.sendFile(__dirname + '/public/pages/notFound.html')
})

export default Router