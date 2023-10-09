const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const createUser = db.define('createUser', {
  name: {
    type: DataTypes.STRING,
    allowNull: null,
    require: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  }

})

module.exports = createUser