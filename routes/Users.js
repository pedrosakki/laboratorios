const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'labceeslab'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
    created: today
  }

  User.findOne({
    where: {
      id: req.body.id
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              console.log(userData);
              res.json({ status: user.id + user.first_name +' Registrado....(Users)' })
            })
            .catch(err => {
              res.send('(Users) error: ' + err)
            })
        })
      } else { //ya esta registrado
        res.json({ error: 'El usuario ya existe....(Users)' })
      }
    })
    .catch(err => {
      res.send('(Users)error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'Usuario no existente....(Users)' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('Usuario no existente....(Users)')
      }
    })
    .catch(err => {
      res.send('error (Users): ' + err)
    })
})



module.exports = users
