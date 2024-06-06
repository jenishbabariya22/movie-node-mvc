const express = require("express")

const { viewuser, adduser, createuser } = require("../controllers/CrudControllers")

const routes = express.Router()

const multer = require('multer');

const userControllers = require('../controllers/CrudControllers');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage }).single('image');

routes.get('/view', viewuser)
routes.get('/adduser', adduser)
routes.post( "/createuser", createuser)  

module.exports = routes