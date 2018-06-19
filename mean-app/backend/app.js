const express = require('express');

const app = express();

//Middleware to funkcja pośrednicząca -> wykonuje kod i potem przekazuje dalej
//do wykonania responsa lub innych działań
app.use((req,res, next)=>{
  console.log('First middleware');
  next();
});

app.use('/api/posts',(req,res, next)=>{
  const posts = [
    {id:'fadf14545l', title: 'Server side post no `1', content:'Content from server'},
    {id:'fadf14545l', title: 'Server side post no 2', content:'Content from server !'}
  ];
 res.status(200).json({
   message: 'Post fetches succesfully!',
   posts: posts
 });
});

module.exports = app;
