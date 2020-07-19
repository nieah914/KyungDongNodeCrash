var express = require('express');
var router = express.Router();
/*
이쪽 디폴트 주소는 
http://localhost:3000/admin 이렇게 됨.
 */
router.get('/function', function(req, res, next) {
  console.log('여기를 호출했습니다.')
});


module.exports = router;
