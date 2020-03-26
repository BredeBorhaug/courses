const express = require(`express`)
const app = express()

const PORT = 3000

app.get(`/`, (req, res) => {
    res.send(`Hello from the get endpoint`)
})

app.get(`/myendpoint`, (req, res) => {
    res.send(`Hello from the /myendpoint`)  
})

// use postman here, and include [message : "some mesasgde"] in header
app.post(`/`, (req, res) => {
    if ( typeof req.headers.message === `undefined`) return res.sendStatus(400)
    console.log(req.headers.message)
    res.send(`We did a post to the console.`)
})

app.post(`/somepost`, (req, res) => {
    if ( typeof req.headers.message === `undefined`) return res.sendStatus(400)
    console.log(req.headers.message)
    res.send(`We did a post to the console from .`)
})

app.delete(`/`, (req, res) => {
    console.log(`Api to delete something, and return status 202 that the delete is completed`)
    res.sendStatus(202)
})

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})