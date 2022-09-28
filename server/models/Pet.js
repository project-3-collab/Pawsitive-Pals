const { Schema } = require('mongoose');

const petSchema = new Schema({
  name: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved pet id from petfinder
  id: {
    type: Integer,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
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
