const path = require('path')

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')

const helmet = require('helmet')
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use((req, res, next) => {
    if (req.query.msg === 'fail') {
        res.locals.msg = 'Sorry, this username and password combination does not exist'
    } else {
        res.locals.msg = ''
    }
    next()
})

app.get('/', (req, res, next) => {
    res.send('Sanity Check')
})

app.get('/login', (req, res, next) => {
    res.render('login')
})

app.get('/logout', (req, res, next) => {
    res.clearCookie('username')
    res.render('login')
})

app.get('/welcome', (req, res, next) => {
    res.render('welcome', {username: req.cookies.username})
})

app.post('/process_login', (req, res, next) => {
    const {username, password} = req.body
    if (password === 'password') {
        res.cookie('username', username)
        res.redirect('welcome')
    } else {
        res.redirect('/login?msg=fail')
    }
})

app.listen(3000, () => console.log('Listening on port 3000...'))