const mongoose = require('mongoose');
const Schema1 =mongoose.Schema;

let Room = new Schema1({
    roomname: {type: String,  required: true },
    establisher: {type: String, required: true },
    explain:{type:String},
    max: { type: String, required: true },
    members:{type: Array  }
});

module.exports = mongoose.model('Room',Room);