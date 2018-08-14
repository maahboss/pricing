

const express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  res.render('index.html',{
     pageTile:'Home Page',
  });
});

app.get('/pricing',(req,res) => {
    res.render('pricing.html',{
       pageTile:'Home Page',
    });
  });

app.listen(port,() => {
    console.log('server is up on port 3000');
    
});