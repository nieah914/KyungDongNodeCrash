var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
path.join(__dirname, 'views')

let currentFolderName = __dirname.split("\\").pop()
let ParentPath = path.join(__dirname,'..')

fs.readdir(ParentPath, (err, folder_list) => { 
   for(let i = 0 ; i < folder_list.length; i++) {
      // router.js 는 라우팅 등록에서 제외
      if(folder_list[i] == currentFolderName) {
         //pass
      }
      // routes 폴더내의 각 모듈들을 라우팅 등록
      else {
         let targetFolerPath = path.join(ParentPath,folder_list[i]);
         fs.readdir(targetFolerPath, (err, file_list) => { 
            for(let j = 0 ; j < file_list.length; j++) {
               let targetFilePath = path.join(folder_list[i],file_list[j]);
               let module_path = path.join(targetFilePath);
               var common = require('../' + module_path);
               console.log('../'+ file_list[j]);
               router.use('../'+ file_list[j],common);
            }
         });
      }
   }
});
// console.log(test);
// console.log(__dirname);
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


// // 로그인 모델
// var login = require('./login/login')
// router.use('/login',login);

// // 회원가입 모델
// var join = require('./join/join')
// router.use('/join',join);

// // 대시보드 모델
// var dashboard = require('./dashboard/dashboard')
// router.use('/dashboard',dashboard);


module.exports = router;
