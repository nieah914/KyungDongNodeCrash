var express = require('express');
var router = express.Router();
var path = require('path');
var viewPath = path.join(__dirname,'..','..','views')
var Users = require('../common/User')
/*
이쪽 디폴트 주소는 
http://localhost:3000/admin 이렇게 됨.
 */
// 개별 기능을 넣을때는 이리로
router.get('/' ,function(req, res, next) {
    console.log('login')
    res.sendFile(path.join(viewPath, '/login/login.html'));
});
  
router.get('/function', function(req, res, next) {
    console.log('여기를 호출했습니다.')
});

router.post('/selectID', function(req, res, next) {
    var user_id = req.body.id;
    var user_pw = req.body.pw;
    Users.find({"id":user_id, "passwd":user_pw}, (err, users) => {
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users);
    })
  });

module.exports = router;


