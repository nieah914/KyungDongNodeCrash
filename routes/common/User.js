var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let db = mongoose.connection;

db.on("error", console.error);

db.once("open", function() {
    console.log("Connected to mongod server");
    
  });


mongoose.connect('mongodb://192.168.35.160:27017/KD');


    var studentSchema = mongoose.Schema({
        name : 'string',
        address : 'string',
        age : 'number'
    });

module.exports = mongoose.model('student',studentSchema)
// TB_UserInform