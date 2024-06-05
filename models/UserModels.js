const mongoose = require("mongoose")

const userschema = mongoose.Schema({
  movie: {
    type: String,
    required: true
  },
  ticket: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  }
})

const user = mongoose.model('user', userschema)

module.exports = user