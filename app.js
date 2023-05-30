//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const PORT = process.env.PORT || 3000;
const http = require("http");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://Yatcher_01:Jaguar123@new.nufxqpo.mongodb.net/blogDB", {
//     useNewUrlParser: true
// });

// const postSchema = {
//     title: String,
//     content: String,
//     class: String
// };

// const Post = mongoose.model("Post", postSchema);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function (req, res) {
    Post.find({}).then(function(posts){
        try {
          res.render("home", {
            posts: posts
            });
        } catch (error) {
        console.log(error);      
        }
      });
});

app.get("/About-Us", function (req, res) {
    res.render("about");
});

app.get("/Contact", function (req, res) {
    res.render("contact");
});

app.get("/Blogs", function(req, res){
    Post.find({}).then((post)=>{
      try {
        if(post){
          res.render("blogs", {postsFound: post});
        }
      } catch (error) {
        console.log(error);
      }
    });
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});