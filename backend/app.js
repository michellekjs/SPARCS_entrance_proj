const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const teamRoutes = express.Router();
const PORT = 4000;
let User = require('./user');
let Class = require('./class');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/team', { useNewUrlParser: true ,useUnifiedTopolgy:true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


teamRoutes.route('/users').post(function(req,res,next){
  console.log(req.body);

  let user = new User({'name':req.body.name, 'id':req.body.id, 'pwd':req.body.pwd});
  user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('error in making a new user');
        });
})

teamRoutes.route('/class').post(function(req,res,next){
  console.log(req.body);

  let class1 = new Class({'classname':req.body.classname, 'classpwd':req.body.classpwd, 'classdescrip':req.body.classdescrip});
  class1.save()
  .then(class1 => {
      res.status(200).json({'class': 'class added successfully'});
  })
  .catch(err => {
      res.status(400).send('adding new class failed');
      console.log(err);
  });
})


teamRoutes.get('/classfind/:classname/:classpwd', function(req,res){
  console.log("does it enter here?");
  Class.findOne({'classname':req.params.classname.toString(), 'classpwd':req.params.classpwd.toString() }, function(err,result) {
    if(result==null){
      console.log("fail");
      res.send("fail");
    }
    else{
      console.log(result);
      res.send(result);
    }
  });
});

teamRoutes.get('/match/:classname'),function(req,res){
  console.log(req.params.classname);
}


app.use('/team', teamRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

