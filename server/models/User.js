const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Pet.js
const petSchema = require('./Pet');

// import schema from PlaydateRequest.js
const playdateRequestSchema = require('./PlaydateRequest');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    firstname:
    {
      type: String,
    },
    lastname:
    {
      type: String,
    },
    admin: {
      type: Boolean,
      required: true,
    },
    address: {
      type: String
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String
    },
    license: {
      type: String
    },
    birthdate: {
      type: String
    },
    age: {
      type: Number
    },
    experience: {
      type: String
    },
    housing: {
      type: String
    },

    // set savedPets to be an array of data that adheres to the petSchema
    savedPets: [petSchema],

    // set playdateRequests to be an array of data
    submittedRequests: [{
      type: Schema.Types.ObjectId,
      ref: 'PlaydateRequest'
    }]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);



// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `petCount` with the number of saved pets and requests we have
userSchema.virtual('petCount').get(function () {
  return this.savedPets.length;
});

userSchema.virtual('requestCount').get(function () {
  return this.submittedRequests.length;
});


const User = model('User', userSchema);

module.exports = User;
