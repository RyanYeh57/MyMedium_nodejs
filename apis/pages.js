const express = require('express');
const router = express.Router();
// 導入首頁
router.route("/").get(async function(req, res) {
  res.redirect("/index");
});
// 首頁
router.route("/index")
.get((req, res) => {
  res.render('index.ejs')
})
.post((req, res) => {
  res.render('index.ejs')
})
// 註冊
router.route("/register")
.get((req, res) => {
  res.render('register.ejs')
})
// 登入
router.route("/log_in")
.get((req, res) => {
  res.render('login.ejs')
})
// 會員頁面
router.route("/member")
.get((req, res) => {
  res.render('member.ejs')
})
module.exports = router;