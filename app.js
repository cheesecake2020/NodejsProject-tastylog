const PORT = process.env.PORT;
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();


// Expressの設定
app.set("view engine", "ejs");
app.disable("x-powered-by");

// 静的コンテンツの配信の設定
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));
// 動的コンテンツの配信
app.use("/", require("./routes/index.js"));
// アプリケーションの実行
app.listen(PORT, () => {
  console.log(`Application listening at ${PORT}`);
});