//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const PORT = process.env.PORT || 3000;
const http = require("http")

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home");
});

app.get("/About-Us", function(req, res){
    res.render("about");
});

app.get("/Contact", function(req, res){
    res.render("contact");
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });