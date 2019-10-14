var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
var port = 3000;
app.listen(port);

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err)throw err;
    console.log("Connected as id: " + connection.threadId);
});

app.get("/", function(req,res){
    connection.query("SELECT * FROM burgers;", function(err,data){
        res.render("index", {burgers:data});
    });
});
