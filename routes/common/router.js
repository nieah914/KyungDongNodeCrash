var express = require('express');
var router = express.Router();
var path = require('path');
var routerPath = path.join(__dirname,'..','..','routes')

// 로그인 모델
var login = require(path.join(routerPath,'login/login'))
router.use('/login',login);

// 회원가입 모델
var join = require(path.join(routerPath,'join/join'))
router.use('/join',join);

// 대시보드 모델
var dashboard = require(path.join(routerPath,'dashboard/dashboard'))
router.use('/dashboard',dashboard);

// 관리자 모델
var admin = require(path.join(routerPath,'/admin/admin'))
router.use('/admin',admin);

// fs.readdir(routerPath, (err, folder_list) => { 
//    // console.log('routerPath = ' + routerPath)
//    for(let i = 0 ; i < folder_list.length; i++) {
//       // router.js 는 라우팅 등록에서 제외
//       if(folder_list[i] == currentFolderName) {
//          //pass
//       }
//       // 폴더가 아닌경우
//       else if (folder_list[i].split('.').length > 1) {
//          //pass
//       }
//       // 폴더인 경우
//       else {
//          let targetFolderPath = path.join(routerPath,folder_list[i])
//          fs.readdir(targetFolderPath, (err, file_list) => { 
//             // console.log('ㄴfolder_list = ' + folder_list[i])
//             for(let j = 0 ; j < file_list.length; j++) {
//                // console.log("  ㄴfile_list[i] = " + file_list[j])
//                let fileName = file_list[j].split('.')[0]
//                let targetFilePath = path.join(targetFolderPath,fileName)
//                // console.log("  ㄴtargetFilePath = "+ targetFilePath)
//                // console.log(targetFilePath)

//                common = require(targetFilePath);
               
//                console.log(targetFilePath)
//                console.log(path.join('/',fileName))
//                router.use(path.join('/',fileName), common);
//             }
//          });
//       }
//    }
// });





module.exports = router;
