var express = require('express');
var router = express.Router();
const path = require('path');
var bodyParser = require('body-parser');

// 새롭게 등록할 라우터는 아래에 작성하기 바람
/*
   예를들어 admin에 대한 모델을 개발할때에는 아래와 같이 진행하면됨
   routes/common 폴더 아래에 admin 폴더 생성
   routes/common/admin/ 아래에 필요한 모델들을 생성하면됨 
   routes/common/admin/admin.js 를 생성함.
   상기의 모델을 common js로 등록시에는 
        var common = require('./common/admin/admin') 이렇게 등록하면됨.
        router.use('/common',common);
 */
/* GET home page. */

//admin 화면
router.get('/admin', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/common/admin/admin.html'));
});
  

//login 화면
router.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/common/login/login.html'));
});
  

//회원가입 화면
router.get('/join', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/common/join/join.html'));
});
  

//dashboard 화면
router.get('/dashboard', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/common/dashboard/dashboard.html'));
});
  
module.exports = router;
