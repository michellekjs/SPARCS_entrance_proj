const mongoose = require('mongoose');
const Schema1 =mongoose.Schema;

let Confirm = new Schema1({
    username:{ type: String },
    status : { type: String},
});

module.exports = mongoose.model('Confirm',Confirm);