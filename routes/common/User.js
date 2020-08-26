var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let db = mongoose.connection;

db.on("error", console.error);

db.once("open", function() {
    console.log("Connected to mongod server");
 });


mongoose.connect('mongodb://192.168.35.160:27017/KD');


    var UserInformSchema = mongoose.Schema({
        id : 'string',
        passwd : 'string',
        name : 'string'
    });

module.exports = mongoose.model('TB_UserInform',UserInformSchema)
// TB_UserInform