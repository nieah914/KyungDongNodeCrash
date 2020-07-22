var express = require('express');
var router = express.Router();
const path = require('path');
/*
이쪽 디폴트 주소는 
http://localhost:3000/admin 이렇게 됨.
 */
console.log(__dirname)
router.get('/' ,function(req, res, next) {
  console.log('필요하면 여길탐');
  res.sendFile(path.join('../../','/admin/admin.html'));
});


router.get('/function', function(req, res, next) {
  console.log('여기를 호출했습니다.')
});


module.exports = router;
