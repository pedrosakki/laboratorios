const express = require('express')
const muestras = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Muestra = require('../models/Muestra')
muestras.use(cors())

process.env.SECRET_KEY = 'labceeslab'

muestras.post('/recepcion', (req, res) => {
  const today = new Date()
  const muestraData = {
    id: req.body.id,
    fecha: today,
    procedencia: req.body.procedencia,
    tipo: req.body.tipo,
    ctrlCalidad: req.body.ctrlCalidad,
    ampliarAmbiental: req.body.ampliarAmbiental,
    confirmarCepa:  req.body.confirmarCepa,
    temp: req.body.temp,
    observaciones: req.body.observaciones,
    analisisSolicitado: req.body.analisisSolicitado,
    motivo: req.body.motivo,
    prioridad: req.body.prioridad,
    claveExa1: req.body.claveExa1

  }

  Muestra.findOne({
    where: {
      id: req.body.id
    }
  })
    //TODO bcrypt
    .then(muestra => {
      if (!muestra) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          muestraData.password = hash
          Muestra.create(muestraData)
            .then(muestra => {
              console.log(muestraData);
              res.json({ status: muestra.id  +' Registrado....(Muestras)' })
            })
            .catch(err => {
              res.send('(Muestras) error: ' + err)
            })
        })
      } else { //ya esta registrado
        res.json({ error: 'La Muestra ya existe....(Muestras)' })
      }
    })
    .catch(err => {
      res.send('(Muestras)error: ' + err)
    })
})






module.exports = muestras
