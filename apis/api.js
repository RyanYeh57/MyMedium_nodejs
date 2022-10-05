const express = require('express');
const router = express.Router();
const mySqlDb = require('../connection/mySqlconnection');
const session = require('express-session');


/*
 會員系統 API
*/
// 註冊會員
router.route("/register")
.post((req, res) => {
  let data = req.body;
  // 驗證是否重複註冊
  mySqlDb.query(
    "SELECT email FROM member WHERE email = ?;",[data.email],
    (err, result) => {
      if (result.email !== []) {
        res.redirect("/") 
      } else {
        console.log(result.email)
        mySqlDb.query(
          "INSERT INTO member (name, email, password, type) VALUES (?, ?, ? ,?);",
          [data.name, data.email, data.password, 4],
          (err, result) => {
            if (err) {
              res.status(400).json({message:err});
            } else {
              if (result !== null && result.insertid !== null) {
                res.status(201).json({message:"insert successfully!"})
              } else {
                res.status(400).json({message:"bad request!"})
              }
            }
          } 
        ) 
      }
    }
  )
})

module.exports = router;