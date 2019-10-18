const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { sequelize } = require('./models')

const app = express()
app.use(bodyParser.json())
app.use(morgan("combined"))

app.get('/api', (req, res) => {
    res.send({
        msg: 'hello nodejs'
    })
})

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send({
        code: 200,
        data: req.body
    })
})


sequelize.sync()
    .then(() => {
        console.log('db success')
        app.listen(3000, () => { console.log('接口已经开启了') })
    })
    .catch(err => {
        console.error(err)
    })