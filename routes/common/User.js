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

module.exports = mongoose.model('tb_userinforms',UserInformSchema) 
// mongoose는 테이블 명명을 소문자에 + s로 합니다. 
// TB_UserInform으로 만들었는데 tb_userinforms로 생깁니다.