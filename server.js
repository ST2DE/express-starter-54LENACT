var express = require('express');
var app = express();

var db = require('./models');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs');
var todoList =["wash the car and change oil",
              "buy groceries and make dinner"]

var routes = require('./routes')(app);
//===========Express Routes Here=======//
app.get("/",function(req,res){
  res.render("index.ejs")
});
//catch all other routes
app.get("*",function(req,res){
  res.send("<h1>Invalid Pages</h1>")
});

//=====sever listening on port3000
app.listen(3000, function() {
  db.sequelize.sync();
  console.log("sever started on port 3000");
});