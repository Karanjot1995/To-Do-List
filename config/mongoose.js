const mongoose = require('mongoose')

//connect to db
mongoose.connect('mongodb://localhost/to_do_db', {useNewUrlParser: true});

//acquire the connection(to check if it is successful)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to db'))
db.once('open', function(){
  console.log('Successfully connected to the database', db.name)
})

module.exports = db