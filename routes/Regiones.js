const express = require('express')
const regiones = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Region = require('../models/Region')
regiones.use(cors())

process.env.SECRET_KEY = 'labceeslab'

/*regiones.get('/TodasReg', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Region.findAll().then(function (region) {
      console.log(region);
  });
})*/

  regiones.get('/TodasReg', (req, res) => {
    console.log('en Regiones A')
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  Region.findAll({
      where: {
        estado: res.estado
      }
    })
      .then(region => {
        if (region) {
            console.log('en Regiones B')
          res.json(region)
        } else {
          res.send('region no existente....(Regiones)')
        }
      })
      .catch(err => {
        res.send('error (Regiones): ' + err)
      })
  })




/*  Region.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(region => {
      if (region) {
        res.json(region)
      } else {
        res.send('Region no existente....(Regiones)')
      }
    })
    .catch(err => {
      res.send('error (Regiones): ' + err)
    })*/


module.exports = regiones
