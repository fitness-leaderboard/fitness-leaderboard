const express = require('express')
const app = express()
const PORT = 8080

app.get('/hello', (req, res) => {
    res.status(200).send({
        text : 'hello world'
    })
})

app.post('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    res.send({
        text : `hello ${name}`
    })
})

app.listen(
    PORT, 
    () => console.log(`Listening on http://localhost:${PORT}`)
)