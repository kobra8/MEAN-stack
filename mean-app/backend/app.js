const express = require('express');

const app = express();

//Middleware to funkcja pośrednicząca -> wykonuje kod i potem przekazuje dalej
//do wykonania responsa lub innych działań
app.use((req,res, next)=>{
  console.log('First middleware');
  next();
});

app.use((req,res, next)=>{
 res.send('Hello from express');
});

module.exports = app;