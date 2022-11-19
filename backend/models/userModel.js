const mongoose = require('mongoose');

// A USER MUST SEND HIS TEAM NAME AND PASSWORD
const userSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, 'A user must belong to a team'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  disqualified: {
    type: Boolean,
    default: false,
  },
  flags: {
    type: [
      {
        type: Number,
        default: 0,
      },
      {
        type: Number,
        default: 0,
      },
      {
        type: Number,
        default: 0,
      },
    ],
  },
});

// CREATING AN OBJECT USER BASED ON THE USER SCHEMA
const User = mongoose.model('User', userSchema);

// EXPORTING THE USER OBJECT
module.exports = User;
