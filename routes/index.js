const express = require("express")

const routes = express.Router()

routes.use('/crud', require('./CrudRoutes'))

module.exports = routes