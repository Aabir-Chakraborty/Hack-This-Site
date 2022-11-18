const mongoose = require('mongoose');

// A USER MUST SEND HIS NAME, EMAIL, PHONE NUMBER, BRANCH AND PASSWORD
const questionSchema = new mongoose.Schema({
  questionName: {
    type: String,
    required: true,
  },
  round: {
    type: Number,
    enum: [1, 2, 3],
    required: true,
  },
  questionStatement: {
    type: String,
    required: true,
  },
  questionLinks: {
    type: String,
  },
});

// CREATING AN OBJECT USER BASED ON THE USER SCHEMA
const Questions = mongoose.model('Questions', questionSchema);

// EXPORTING THE USER OBJECT
module.exports = Questions;
