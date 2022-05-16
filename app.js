const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/myRouter')



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//connect mongoDB
mongoose.connect('mongodb+srv://admin:admin@js-oop.8vilc.mongodb.net/myProject?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(session({ secret: "mysession", resave: false, saveUninitialized: false }))
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))


app.listen(7777, () => {
    console.log("start server")
})