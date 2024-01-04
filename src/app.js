const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet()); // tránh lộ thông tin header của api
app.use(compression()); // giảm băng thông giảm khi server trả thông tin cho client

// init db
require("./dbs/init.mongodb");
const { checkOverLoad } = require("./helpers/check.connect");
checkOverLoad();
// init routes

// handling error

module.exports = app;
