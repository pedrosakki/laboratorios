const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'muestra',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    fecha: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    procedencia: {
      type: Sequelize.STRING
    },
    tipo: {
      type: Sequelize.INTEGER
    },
    ctrlCalidad: {
      type: Sequelize.INTEGER
    },
    ampliarAmbiental: {
      type: Sequelize.STRING
    },
    confirmarCepa: {
      type: Sequelize.STRING
    },
    temp: {
      type: Sequelize.INTEGER
    },
    observaciones: {
      type: Sequelize.STRING
    },
    analisisSolicitado: {
      type: Sequelize.STRING
    },
    motivo: {
      type: Sequelize.STRING
    },
    prioridad: {
      type: Sequelize.INTEGER
    },
    claveExa1: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)
