# 경동 온도 측정 프로그램

## 프로젝트 시작시 주의사항
* 프로젝트시작시(개발을 하기 위해서 최초 프로젝트 로드시) 항상 최신으로 git 의 코드들을 당겨온다.
    ```
    git pull origin master
    ```
## 2020-09-08 업데이트
### MongoDb인 Mongoose 의 insert select 부분들에 대한 테스트예제 포함
* 테스트를 진행해보기 위해서는 routers.js에서 // DB ConnectionTest 이부분을 확인해 보면된다.

## 2020-07-29 업데이트
### 프로젝트 백엔드 기본 특 작성 완료
* 업데이트 완료 js 하나의 파일에서 view 라우터 및 일반 라우팅 기능 추가완료

## 2020-07-19 업데이트
### 프로젝트 백엔드 기본 특 작성 완료
* 프로젝트 사용법은 금주 스터디 시간에 간단히 설명 예정
* 프로젝트 내려받기
    ```
    첫 프로젝트 내려받기
    git clone https://github.com/nieah914/KyungDongNodeCrash.git
    ```
    상단의 명령어를 이용해서 내려받음


* 웹서버 시작 방법
   ```
    npm run dev 
   ```

* 수정한 프로그램 반영시
    * 수정 사항을 확인
    ```
    git status
    ```
   
    * 수정할 사항들을 타켓팅
    ```
    git add -u
    git add *
    ```

    * 수정할 사항들을 commit
    ```
    git commit -m "20200719 정해인 - 프로젝트 틀 반영"
    ```