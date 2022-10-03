const { Schema } = require('mongoose');

const petSchema = new Schema({
  // saved pet id from petfinder
  petId: {
    type: Number,
    required: true,
  },
  name: {
      type: String,
    },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  // type of animal
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String
  },
  age:{
    type: String
  },
  size: {
    type: String
  },
  environment: [
    {
      type: String 
    }
  ],
  tags: [
    {
      type: String
    }
  ],
  contact: [
    {
      type: String
    }
  ]
  
});

module.exports = petSchema;
