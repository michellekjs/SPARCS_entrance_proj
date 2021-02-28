const mongoose = require('mongoose');
const Schema =mongoose.Schema;

let User = new Schema({
    name:{ type: String,  required: true },
    id: { type: String, unique: true, required: true },
    pwd: { type: String, required: true },
    permission: {type:String, required:true}
});

module.exports = mongoose.model('User',User);