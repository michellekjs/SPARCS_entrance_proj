const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const teamRoutes = express.Router();
const PORT = 4000;
let User = require('./user');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/team', { useNewUrlParser: true ,useUnifiedTopolgy:true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

teamRoutes.route('/users').post(function(req,res){
  console.log(req.body);
  let user = new User({name:req.body.name, id:req.body.id, pwd:req.body.pwd});
  user.save()
        .then(user => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
})

app.use('/team', teamRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});