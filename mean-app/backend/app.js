const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

//CORS proxy
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware to funkcja pośrednicząca -> wykonuje kod i potem przekazuje dalej
//do wykonania responsa lub innych działań
app.use((req,res, next)=>{
  console.log('First middleware');
  next();
});

app.post('/api/posts',(req,res,next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added succesfully'
  });
})

app.get('/api/posts',(req,res, next)=>{
  const posts = [
    {id:'fadf14545l', title: 'Server side post no 1', content:'Content from server'},
    {id:'fadf14545l', title: 'Server side post no 2', content:'Content from server !'}
  ];
 res.status(200).json({
   message: 'Post fetches succesfully!',
   posts: posts
 });
});

module.exports = app;
