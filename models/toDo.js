const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
  description:{
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  }

})

//collection name(capital) that will be defined by contactSchema
const ToDo =   mongoose.model('ToDo', toDoSchema)

module.exports = ToDo