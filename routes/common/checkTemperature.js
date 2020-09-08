var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let db = mongoose.connection;

db.on("error", console.error);

db.once("open", function() {
    console.log("Connected to mongod server");
    
  });


mongoose.connect('mongodb://192.168.35.160:27017/KD');

var tb_daily_user_temps = mongoose.Schema({
    id : 'string',
    temp : 'string',
    date : {type: Date, default: Date.now}
});

module.exports = mongoose.model('tb_daily_user_temps',tb_daily_user_temps)
// TB_UserInform