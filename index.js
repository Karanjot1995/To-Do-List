const express = require('express')
const path = require('path')
const port = 8100
const db =  require('./config/mongoose')
const ToDo = require('./models/toDo')

const app = express()

app.set('view engine', 'ejs')
app.set('views',  path.join(__dirname, 'views'))
app.use(express.urlencoded());
app.use('/',express.static('assets'))




app.post('/create', (req,res)=>{

  const date =new Date(req.body.date).toLocaleString('default',{day:'numeric',month:'long', year:'numeric'})
  // const dt=d.getDate();
  // const mn=d.toLocaleString('default', { month: 'long' });

  // const yr = d.getFullYear()
  ToDo.create({
    description: req.body.description,
    category: req.body.category,
    date : date
  },(err, newItem)=>{

    if(err){
      console.log('error in creating a contact',err)
      return
    }
    console.log('newItem: ',newItem)
    return res.redirect('back')
  })
})

app.get('/', (req,res)=>{
  ToDo.find({}, function(err,allToDos){
    if(err){
      console.log('error in fetching ccontacts from database',err)
      return
    }
    // console.log('all contacts: ',allContacts)
    return res.render('home', {title: "To Do List", allToDos:allToDos})
  })
})

app.get('/delete-item', (req,res)=>{
  console.log(req.query)
  // ToDo.findByIdAndDelete(req.query.id, (err)=>{
  //   if(err){
  //     cconsole.log('Error in deleting from database', err)
  //     return
  //   }
  //   return res.redirect('back')

  // })

  ToDo.deleteMany(
    {
      _id: {
        $in:req.query.ids
      }
    },
    function(err, result) {
      if (err) {
        console.log('Error in deleting from database', err)
        return
      } else {
        return res.redirect('back')
      }
    }
  );
})





app.listen(port, (err)=> {
  if(err){
    console.log(`error is running server: ${err}`)
  }
  console.log(`server running successfully on port : ${port}`)
})