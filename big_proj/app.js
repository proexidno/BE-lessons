var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require("nunjucks");

var indexRouter = require('./routes/index');
var questionsRouter = require("./routes/questions")

var app = express();

app.engine("html", nunjucks.render)
app.set("view engine", "html")

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/questions', questionsRouter);

module.exports = app;
