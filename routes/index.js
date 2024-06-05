const express = require("express")

const routes = express.routes()

routes.use('/crud', require('./CrudRoutes'))

module.exports = routes