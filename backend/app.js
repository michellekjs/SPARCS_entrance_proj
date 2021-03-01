const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const teamRoutes = express.Router();
const PORT = 8080;
const jwt = require('jsonwebtoken')
let User = require('./user');
let Class = require('./class');
let Board = require('./board');
let Confirm  = require('./confirm');
let Room = require('./room')
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/team', { useNewUrlParser: true ,useUnifiedTopolgy:true});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


teamRoutes.route('/users').post(function(req,res,next){
  console.log(req.body);

  let user = new User({'name':req.body.name, 'id':req.body.id, 'pwd':req.body.pwd, 'permission':'student'});
  user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('error in making a new user');
        });
})

teamRoutes.route('/login').post(function(req,res,next){
  console.log(req.body);
  User.findOne({'id':req.body.id, 'pwd':req.body.pwd}, function(err,result){
    if (result ==null){
      console.log("no such user");
      res.send("fail")
    }
    else{
      var token = jwt.sign({
        id:req.body.id,
        permission:result.permission
      }, 'shh');
      res.json({'token': token})
    }
  })
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


teamRoutes.route('/classfind/:classname/:classpwd').get( function(req,res){
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

teamRoutes.route('/newmember/:roomname/:user/:classname').get(function(req,res){
  console.log(req.params.classname);
  Class.findOne({'classname':req.params.classname},function(err,result){
    console.log(result.room);

    for (i = 0; i < result.room.length; i++) {
      if (result.room[i]['roomname'] === req.params.roomname) {

        console.log(result.room[i].members);
          result.room[i].members.push(req.params.user);
          console.log(result.room[i].members);
          result.markModified("room");
         res.send(result);
         result.save();
      }
  }
    })
  })

  teamRoutes.route('/newroom/:classname').post(function(req, res) {
    let newroom = new Room(req.body);
    console.log(req.body)
    Class.findOne({'classname':req.params.classname}, function(err,result){

      
      result.room.push(newroom);
      console.log(result);
      result.save();
    })
  });
  


teamRoutes.route('/newboard/:classname').post(function(req, res) {
  let newboard = new Board(req.body);
  console.log(req.body)
  Class.findOne({'classname':req.params.classname}, function(err,result){
    if(result==null){
      console.log("fail");
    }
    else{
      console.log("nmmmmm")
      console.log(newboard);
      console.log(result);
      console.log(result.board);
      result.board.push(newboard);
      result.save();
    }
  })
});


teamRoutes.route('/confirm').post(function(req,res){
  let newconfirm = Confirm(req.body);
  newconfirm.save();
})

teamRoutes.route('/getpermission').get(function(req,res){
  console.log("enter permission")
  Confirm.find({},function(err,result){
    res.send(result);
    console.log(result);
  })
})

teamRoutes.route('/addmember/:classname').post(function(req,res){
  Class.findOne({'classname':req.params.classname}, function(err,result) {
    if(result==null){
      console.log("fail");
      res.send("fail");
    }
    else{
      console.log("serveer")
      if (result.classmembers.includes(req.body.id)){
        console.log("already there")
        console.log(result.classmembers)
        res.send(result.classmembers)
      }
      else{
        console.log("add as user")
        result.classmembers.push(req.body.id);
        console.log(req.body)
        console.log(result.classmembers);
        result.save();
        res.send(result.classmembers);
      }
    }
  });

})


teamRoutes.route('/changepermission/:username').get(function(req,res){
  console.log("enter permission")
  Confirm.findOneAndUpdate({'username':req.params.username},{$set:{'status':'done'}}, function(err,result){
    res.send(result);
    console.log("the result");
    console.log(result);
  })
 User.findOneAndUpdate({'id':req.params.username},{$set:{'permission':'prof'}}, function(err,result){
    console.log("the result2");
    console.log(result);
  })

})

teamRoutes.route('/permissionstatus').post(function(req,res){
  User.findOne({'name':req.body.id},function(err,result){
    res.send(result.permission)
  })
})




app.use('/team', teamRoutes);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

