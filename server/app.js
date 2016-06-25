var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Incorporating Mongo and Mongoose Information
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pets');


//Spin up server
var server = app.listen(3000, 'localhost', function(req, res){
  var port = server.address().port;
  console.log("Server up and listening on port " + port);
});

//Establish base URL
app.get('/', function(req, res){
  console.log("Bling. Got a hit on root directory.");
  res.sendFile( path.resolve('views/index.html'));
});

app.get('/Pets', function(req, res){
  console.log("Hit at View Pets");
  res.sendFile( path.resolve('views/pets.html'));
});

app.get('/Add', function(req, res){
  console.log("Hit at Add Pets");
  res.sendFile( path.resolve('views/add.html'));
});

app.get('/About', function(req, res){
  console.log("Bling. Got a hit on About page.");
  res.sendFile( path.resolve('views/about.html'));
});

//Set static folder
app.use(express.static('public'));
