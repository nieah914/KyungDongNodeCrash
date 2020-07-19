var express = require('express');
var router = express.Router();

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
// 관리자 모델
var common = require('./common/admin/admin')
router.use('/admin',common);

// 로그인 모델
var login = require('./common/login/login')
router.use('/login',login);

// 회원가입 모델
var join = require('./common/join/join')
router.use('/join',join);

// 대시보드 모델
var dashboard = require('./common/dashboard/dashboard')
router.use('/dashboard',dashboard);


module.exports = router;
