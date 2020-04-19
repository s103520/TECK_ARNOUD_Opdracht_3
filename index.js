const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/gallery.json');

app.get('/', function(req, res){
  res.render('home', {
  });
});

app.get('/collection', function(req, res){
  res.render('collection', {
    gallery: data.gallery
  });
});

app.get('/detailed', function(req, res){
  res.render('detailed', {
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
  });
});

//app.listen(5000);
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() { });
