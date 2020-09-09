var express = require('express');
var router = express.Router();
var Users = require('../common/User')

var checkTemperature = require('../common/checkTemperature');

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









module.exports = router;

