
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const stylus = require('stylus')

const router = require('./routes')

const app = express()

app.use(stylus.middleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }))
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true, uploadDir: 'public/uploads/', limit: '10mb' }))

app.use(router)

app.listen(5000, () => console.log('Server initialized.'))

module.exports = app
