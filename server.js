const express = require("express");
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dbUrl = 'mongodb://test:test123@ds259351.mlab.com:59351/free-code-camp-mongodb'
const methodOverride = require('method-override')
const connect        = require('connect')
const ejs = require('ejs')

//...Application Files
const User = require('./models/User')

//================APP PREFERENCES ========================//
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//================DATABASE CONNECTION ====================//

mongoose.connect(dbUrl,{useNewUrlParser: true},(err, db) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('succesfully connected to database')


    //================ INDEX ROUTE ========================//
    app.get('/', (req, res) => {
        res.render('home')
    })

    //================NEW USER ROUTE =====================//
    app.get('/user', (req, res) => {
        res.render('user')
    })

    app.get('/user/new', (req, res) => {
        res.render('signup')
    })

    app.post('/user/new', (req, res) => {
        console.log(req.body.user)
        let username = req.body.user.username
        let password = req.body.user.password
        let email = req.body.user.email

        User.create(req.body.user, (err, newUser) =>{
            if(err) {
                console.log(err)
            }
            else {
                res.redirect('/user')
            }
        })
        console.log("you're posting!")
        console.log(db)
    })

})
app.listen(3000,function(){
    console.log("you are connected to port 3000");
    //test
})