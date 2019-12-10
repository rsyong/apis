const express = require('express');
var bodyParser = require("body-parser");
const app = express();

const urlHelper = require('./routes.js');
//设置跨域访问
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})
//设置post接受参数
app.use(bodyParser.urlencoded({ extended: false }));
urlHelper.setRequestUrl(app);

// //配置服务端口
var server = app.listen(3002, function () {

    console.log("服务已启动")

})