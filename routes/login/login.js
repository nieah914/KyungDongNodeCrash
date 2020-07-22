var express = require('express');
var router = express.Router();
/*
이쪽 디폴트 주소는 
http://localhost:3000/admin 이렇게 됨.
 */

// 개별 기능을 넣을때는 이리로
router.get('/login' ,function(req, res, next) {
    console.log('필요하면 여길탐');
    res.sendFile(path.join(ParentPath, '/login/login.html'));
});
  
router.get('/function', function(req, res, next) {
    console.log('여기를 호출했습니다.')
});


module.exports = router;
