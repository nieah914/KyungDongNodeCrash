var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let db = mongoose.connection;

db.on("error", console.error);

db.once("open", function() {
    console.log("Connected to mongod server");
 });


mongoose.connect('mongodb://192.168.35.160:27017/KD');


var UserMatchingSchema = mongoose.Schema({
    uuid : 'string',
    user_id : 'string',
    user_nm : 'string'
});

module.exports = mongoose.model('tb_user_matching_infos',UserMatchingSchema) 
// mongoose는 테이블 명명을 소문자에 + s로 합니다. 
// TB_UserInform으로 만들었는데 tb_userinforms로 생깁니다.