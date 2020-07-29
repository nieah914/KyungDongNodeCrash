var express = require('express');
var router = express.Router();
var path = require('path');
var viewPath = path.join(__dirname,'..','..','views')
/*
이쪽 디폴트 주소는 
http://localhost:3000/admin 이렇게 됨.
 */
// console.log(path.join(viewPath, '/admin/admin.html'))
router.get('/' ,function(req, res, next) {
  console.log('admin')
  res.sendFile(path.join(viewPath, '/admin/admin.html'));
});

router.get('/function', function(req, res, next) {
  console.log('여기를 호출했습니다.')
});


module.exports = router;
