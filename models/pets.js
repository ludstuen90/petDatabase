var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema ({
  name: String,
  animal_type: String,
  age_years: Number,
  img_url: String
});

var Pets = mongoose.model('petplace', petSchema);

module.exports = Pets;
