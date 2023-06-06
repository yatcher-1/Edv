//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const PORT = process.env.PORT || 3000;
const http = require("http");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static("public"));


const connectDB = async () =>{
  try {
    await mongoose.connect("mongodb+srv://Yatcher_01:Jaguar123@new.nufxqpo.mongodb.net/blogDB", {useNewUrlParser:true});
    const postSchema = {
      title: String,
      content: String,
      class: String
    };
    
    const Post = mongoose.model("Post", postSchema);
    app.get("/", function(req, res){
      Post.find({}).then(function(posts){
        try {
          res.render("home", {posts: posts});
        } catch (error) {
        console.log(error);
        }
      });
    });
    app.get("/Blogs", function(req, res){
      Post.find({}).then(function(posts){
        try {
          res.render("blogs", {postsFound: posts});
        } catch (error) {
        console.log(error);
        }
      });
    });
    app.get("/Blogs/:postId", function(req, res){
      const requestPostId = req.params.postId;
        Post.findOne({_id:requestPostId}).then(function(post){
              res.render("blog", {
                title: post.title,
                content: post.content,
                post: post.class
              });
            });
    });
    console.log("connection to mong sucssefull")
  } catch (error) {
    console.log(error);
  }
}

connectDB();

app.get("/About-Us", function (req, res) {
    res.render("about");
});

app.get("/Contact", function (req, res) {
    res.render("contact");
});

app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT}`);
});