var express = require('express');
var router = express.Router();
var path = require('path');
var viewPath = path.join(__dirname,'..','..','views')
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


/*
이쪽 디폴트 주소는 
http://localhost:3000/admin 이렇게 됨.
 */

var Users = require('../common/User')
// 개별 기능을 넣을때는 이리로
router.get('/' ,function(req, res, next) {
    res.sendFile(path.join(viewPath, '/dashboard/dashboard.html'));
});

var vName = "Hong gil dong";
var vAddress = "서울시 강남구 논현동";
var vAge = "22";

var vId = "test";
var vPw = "1234";
var vName = "test";

router.post('/function', function(req, res, next) {
    console.log('여기를 호출했습니다.')
    var studentModel = new Users();
    studentModel.id = vId;
    studentModel.passwd = vPw;
    studentModel.name = vName;
    studentModel.save()
    .then(newPost => {
      console.log("Create 완료");
      res.status(200).json({
        message: "Create success",
        data: {
          post: newPost
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

router.get('/select', (req, res) => {
    Users.find( (err, users) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users);
    })
  });
  
router.get('/selectID', (req, res) => {
    Users.find({"name":vName2}, (err, users) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users);
    })
  });

module.exports = router;

