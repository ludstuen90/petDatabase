var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Incorporating Mongo and Mongoose Information
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pets');
//Require Pets database
var Pets = require('../models/pets');



//Establish base URL
app.get('/', function(req, res){
  console.log("Bling. Got a hit on root directory.");
  res.sendFile( path.resolve('views/index.html'));
});

//Route: Sends webpage of all pets
app.get('/Pets', function(req, res){
  console.log("Hit at View Pets");
  res.sendFile( path.resolve('views/pets.html'));
});

//Route: Sends website where user can add a pet
app.get('/Add', function(req, res){
  console.log("Hit at Add Pets");
  res.sendFile( path.resolve('views/add.html'));
});
// Route: Sends website where user can read about the website
app.get('/About', function(req, res){
  console.log("Bling. Got a hit on About page.");
  res.sendFile( path.resolve('views/about.html'));
});

app.post('/newPet', function(req, res){
  console.log("Request received at create pet!");
  console.log("Request was:");
  console.log(req.body);

var newPet = new Pets( {
  name: req.body.name,
  animal_type: req.body.type,
  age_years: req.body.age,
  img_url: req.body.img_url
});

console.log("and we are about to send over: ");
console.log(newPet);

  newPet.save(function(err){
    if(err) {
      console.log(err);
    } else {
      console.log('Pet saved successfully!');
      res.sendStatus(200);
    }
  });

});

//Data path: Queries database, and sends all userSchema
app.get('/seeAll', function(req, res){
  Pets.find({}, function(err, petsList){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(petsList);
    }
  });
});

//Set static folder
app.use(express.static('public'));

//Spin up server
var server = app.listen(3000, 'localhost', function(req, res){
  var port = server.address().port;
  console.log("Server up and listening on port " + port);
});
