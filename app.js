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


app.get("/", function(req, res){
  res.render("comming-soon");
});


app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT}`);
});