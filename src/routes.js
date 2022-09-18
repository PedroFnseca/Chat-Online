import express from 'express'
import path from 'path'

const __dirname = path.resolve() // get current directory

const Router = express.Router()

Router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

export default Router