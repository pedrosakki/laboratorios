const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'region',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    nombre: {
      type: Sequelize.STRING
    },
    subregion: {
      type: Sequelize.STRING
    },
    estado: {
      type: Sequelize.INTEGER
    }//estado
  }//region

)
