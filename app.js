//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const PORT = process.env.PORT || 3000;
const http = require("http");


app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function (req, res){
  res.render("comming-soon");
});

app.get("/Eccomerce-Consultancy", function (req, res) {
  res.render("ecomerce");
});

app.get("/Digital-Marketing", function (req, res) {
  res.render("digital");
});

app.get("/Influencer-Marketing", function (req, res) {
  res.render("influencer");
});

app.get("/Web-Dev", function (req, res) {
  res.render("webdesign");
});

app.get("/About-Us", function (req, res) {
    res.render("about");
});

app.get("/Contact", function (req, res) {
    res.render("contact");
});

app.get("/Career", function (req, res) {
    res.render("career");
});

app.get("/Partner", function (req, res) {
    res.render("partner");
});

app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT}`);
});