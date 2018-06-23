var express =  require("express");

var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

//LOGIN ROUTE
/**
 * Create a route to show the login page and act accordingly
 * */

//REGISTER ROUTE
/**
 * Create a route to show the register page and act accordingly
 * */

app.get("/",function (req,res) {
    res.render("landing");
});

app.listen(3000,function () {
   console.log("Server started");
});