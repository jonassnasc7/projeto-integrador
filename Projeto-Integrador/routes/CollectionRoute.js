
const express = require('express')
const routerCollection =  express.Router()

const CollectionController = require('../controllers/CollectionController')

routerCollection.get('/to-search', CollectionController.showAll)

module.exports = routerCollection
