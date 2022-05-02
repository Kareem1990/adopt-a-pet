const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPets` array in User.js
const petSchema = new Schema({
  name: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
   
  },
  // saved pets id from pets api
  petId: {
    type: String,
    
  },
  type: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  owners:[ {
    type: String,
    required: true,
  }]
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
