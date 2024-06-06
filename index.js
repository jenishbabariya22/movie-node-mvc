let http = require("http")

let express = require("express")


let port = 8000

let app = express()

const db = require('./config/db')

app.set("view engine", 'ejs')

let path = require("path")

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded())

app.use('/', require("./routes"))

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false
  }
  console.log("Server is start", port);
})