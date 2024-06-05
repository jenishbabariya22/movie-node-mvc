let http = require("http")

let express = require("express")

let port = 8000

let app = express()

app.set("view engine", 'ejs')

app.use('/', require("./routes/CrudRoutes"))

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false
  }
  console.log("Server is start", port);
})