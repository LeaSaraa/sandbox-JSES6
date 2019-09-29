var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


//  APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


//  MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//    title: "test this blog",
//   image: "https://images.pexels.com/photos/2955703/pexels-photo-2955703.jpeg?cs=srgb&dl=animal-animal-photography-blur-2955703.jpg&fm=jpg",
//   body: "yalla is it working okay?"
// });

//RESTFUL ROUTES
app.get("/", function(req, res){
  res.redirect("/blogs");
});

// INDEX ROUTES
app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("error");
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

// NEW ROUTES
app.get("/blogs/new", function(req, res){
  res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  });
});


//SHOW route
app.get("/blogs/:id", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.render("show", {blog: foundBlog});
    }
  });
});


app.listen(3000, function() {
  console.log('Lekker dan');
})
