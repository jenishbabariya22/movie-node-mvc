const express = require("express")
const { viewuser, adduser, createuser } = require("../controllers/CrudControllers")

const routes = express.Router()

routes.get('/view', viewuser)
routes.get('/adduser', adduser)
routes.post("/createuser", createuser)

module.exports = routes