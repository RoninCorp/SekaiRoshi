var express =  require("express");

var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

//LOGIN ROUTE
/**
 * Create a route to show the login page and act accordingly
 * */
app.get("/login", function (req,res) {
   res.render("login");
});

//REGISTER ROUTE
/**
 * Create a route to show the register page and act accordingly
 * */
app.get("/register", function (req,res) {
    res.render("register");
});

app.get("/landing", function (req,res) {
    res.render("landing");
});

app.get("/",function (req,res) {
    res.render("landing");
});

app.listen(3000,function () {
   console.log("Server started");
});