/* Packages */
const express = require('express')
const ejs = require('ejs')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const { QuickDB } = require('quick.db')
const { Client } = require('nova-log.js')

/* Init Required */
const app = express()
const db = new QuickDB({ filePath: "./database/db.sqlite" })
const log = new Client({ logPath: "./database/logs", color: true})

/* Options */
app.set('view engine', ejs)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/* Routes */
app.get('/', async (req, res) => {
    res.render(__dirname+'/pages/index.ejs')
})

app.get('/assets/:filename', async (req, res) => {
    res.sendfile('./pages/assets/' + req.params.filename)
})

app.listen(3000, () => {
    log.debug('Ready on port 3000')
})