var express = require('express');
var router = express.Router();
var Users = require('../common/User')

var checkTemperature = require('../common/checkTemperature');
var userMatching = require('../common/userMatching');

// http://localhost:3000/test/get_all_temp_history
router.get('/get_all_temp_history', (req, res) => {
  let param = {}
  checkTemperature.find( (err, result) => {
      if(err) return res.status(500).send({error: 'database failure'});
      param.data = result
      res.render('test/dash',param);
  })
});


// http://localhost:3000/test/get_all_temp_history
// 에서 개별 조회시
router.get('/select', (req, res) => {
  let param = req.query;
  let returnParam = {}
  checkTemperature.find( {"id":param.id}, (err, users) => {
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(users);
  })
});

// http://localhost:3000/test/get_all_temp_history
// 에서 전체 조회시
router.get('/selectAll', (req, res) => {
  checkTemperature.find( (err, users) => {
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(users);
  })
});




// http://localhost:3000/test/insert
// 에서 온도 측정시
router.get('/insert', (req, res) => {
  let param = req.query;
  var obejct = new checkTemperature();
  obejct.id = param.id;
  obejct.temp = param.temp;
  obejct.save()
  .then(newPost => {
    console.log("Create 완료");
    res.status(200).json({
      message: "Create success"
    });
  })
  .catch(err => {
    res.status(500).json({
      message: err
    });
  });
});



// http://localhost:3000/test/insert/usr_info
// 사용 ex) http://localhost:3000/test/insert/usr_info?uuid=AB CD EF&user_id=10160565&user_nm=정해인 
// 사용자 정보 기입시
router.get('/insert/usr_info', (req, res) => {
  let param = req.query;
  var obejct = new userMatching();
  obejct.uuid = param.uuid;
  obejct.user_id = param.user_id;
  obejct.user_nm = param.user_nm;
  obejct.save()
  .then(newPost => {
    console.log("Create 완료");
    res.status(200).json({
      message: "Create success"
    });
  })
  .catch(err => {
    res.status(500).json({
      message: err
    });
  });
});


// http://localhost:3000/test/select/usr_info
// 사용 ex) http://localhost:3000/test/select/usr_info?uuid=AB CD EF
// 현재 user_id가 10160565는 RFID 태그 코드가 AB CD EF 이다.
router.get('/select/usr_info', (req, res) => {
  let param = req.query;
  let returnParam = {}
  userMatching.find( {"uuid":param.uuid}, (err, users) => {
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(users);
  })
});



module.exports = router;

