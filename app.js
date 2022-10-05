const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();
const apiRouter = require('./apis/api');
const pageRouter = require('./apis/pages')
const PORT = 3000;
// 掛載 ejs 
app.set("view engine", "ejs");
// 靜態資源
app.use(express.static(path.join(__dirname, "public")));
// 取代 body-parser
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
// 路由設定
app.use("/", pageRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`)
})