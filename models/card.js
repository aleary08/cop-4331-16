const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Int32 = require('mongoose-int32');

// Create Schema
const CardSchema = new Schema({
  userId: {
    type: Number
  },
  Card: {
    type: String,
    required: true
  }
});

module.exports = Card = mongoose.model('Cards', CardSchema);