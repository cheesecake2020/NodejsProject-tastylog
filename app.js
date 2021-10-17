const PORT = process.env.PORT;
const path = require("path");
const logger = require("./lib/log/logger.js");
const accesslogger = require("./lib/log/accesslogger.js");
const applicationlogger = require("./lib/log/applicationlogger.js");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();


// Expressの設定
app.set("view engine", "ejs");
app.disable("x-powered-by");

// 静的コンテンツの配信の設定
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// アクセスロガー
app.use(accesslogger());
// 動的コンテンツの配信
app.use("/", require("./routes/index.js"));

// アプリケーションログの準備
app.use(applicationlogger());

// アプリケーションの実行
app.listen(PORT, () => {
  logger.application.info(`Application listening at ${PORT}`);
});