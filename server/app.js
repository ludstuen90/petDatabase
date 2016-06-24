var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Incorporating Mongo and Mongoose Information

mongoose.connect('mongodb://localhost:27017/pets');
