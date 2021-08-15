const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
    trim: true,
  },

  username: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  timestamps: true,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
