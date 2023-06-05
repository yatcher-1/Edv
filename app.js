//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const PORT = process.env.PORT || 3000;
const http = require("http");
const mongoose = require("mongoose");

const postSchema = {
  title: String,
  content: String,
  class: String
};

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static("public"));

async function run() {
  await mongoose.connect("mongodb+srv://Yatcher_01:Jaguar123@new.nufxqpo.mongodb.net/blogDB", {
    useNewUrlParser: true
  });
  const Post = mongoose.model("Post", postSchema);
  await app.get("/", function (req, res) {
    Post.find({}).then(function (posts) {
      try {
        res.render("home", {
          posts: posts
        });
      } catch (error) {
        console.log(error);
      }
    });
  }); // Works!
}
run();



app.get("/About-Us", function (req, res) {
  res.render("about");
});

app.get("/Contact", function (req, res) {
  res.render("contact");
});

app.get("/Blogs", function (req, res) {
  res.render("blogs");
});


app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});