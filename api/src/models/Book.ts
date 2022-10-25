const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: String,
  author: String
}, {
  versionKey: false
})

module.exports = mongoose.model('Book', schema)