import express from 'express'
import ejs from 'ejs'
import {Socket} from 'socket.io'

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Tá funfando</h1>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});