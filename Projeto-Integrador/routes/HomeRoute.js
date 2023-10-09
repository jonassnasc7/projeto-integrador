
const express = require('express')
const routerHome =  express.Router()

const HomeController = require('../controllers/HomeController')

routerHome.get('/', HomeController.showAll)

module.exports = routerHome