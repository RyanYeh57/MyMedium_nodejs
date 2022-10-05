const express = require('express');
const router = express.Router();
const mySqlDb = require('../connection/mySqlconnection')

/*
 會員系統 API
*/
// 註冊會員
router.route("/register")
.post( async function(req, res) {
  
})

module.exports = router;