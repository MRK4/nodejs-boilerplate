require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('./model/user')

const  JWT_SECRET = process.env.JWT_SECRET


// Connexion à la BDD
mongoose.connect('mongodb://localhost:27017/boiler-platedatabase')


const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))


// Permet de décoder le JSON entrant
app.use(bodyParser.json())

app.post('/api/change-password', async (req, res) => {
    const { token, newpassword: plainTextPassword } = req.body

    // Si champ password est vide ou n'est pas du texte
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    // Si password est trop court
    if(plainTextPassword.length < 5){
        return res.json({
            status: 'error',
            error: 'Password too small, Should be atleast 6 characters'
        })
    }

    try{
        const user = jwt.verify(token, JWT_SECRET)

        const _id = user.id
        const password = await bcrypt.hash(plainTextPassword, 10)

        await User.updateOne(
            { _id },
            {
                $set: { password }
            }
        )
        res.json({ status: 'ok' })
    } catch(error) {
        res.json({ status: 'error', error: 'Signature invalide !' })
    }

})

app.post('/api/login', async (req, res) => {

    const { username, password } = req.body

    const user = User.findOne({ username }).lean()

    if(!user){
        return res.json({ status: 'error', error: 'Invalid username/password' })
    }

    if(await bcrypt.compare(password, user.password)){
        // username et password donnés sont corrects avec la bdd

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            JWT_SECRET
        )

        return res.json({ status: 'ok', data: '' })
    }

    res.json({ status: 'error', error: 'Invalid username/password' })
})



app.post('/api/register', async (req, res) => {
    const { username, password: plainTextPassword } = req.body

    // Si champ user est vide ou n'est pas du texte
    if(!username || typeof username !== 'string'){
        return res.json({ status: 'error', error: 'Invalid username' })
    }

    // Si champ password est vide ou n'est pas du texte
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    // Si password est trop court
    if(plainTextPassword.length < 5){
        return res.json({
            status: 'error',
            error: 'Password too small, Should be atleast 6 characters'
        })
    }

    const password = await bcrypt.hash(plainTextPassword, 10) // Hash le mdp

    try {
        const response = await User.create({
            username,
            password
        })
        console.log('user created successfully: ', response)
    } catch(error){
        if(error.code === 11000) {
            // clé dupliquée (non-unique, deja utilisée)
            return res.json({ status: 'error', error: 'Username already in use' })
        }
        throw error
    }

    res.json({ status: 'ok' })
})



app.listen(9999, () => {
    console.log('Server up at 9999')
})