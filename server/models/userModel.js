const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    id:{ type: Number, unique: true },
    name: String,
    email: String, 
    numofaction: Number
  },
  { versionKey: false }
); 

const User = mongoose.model('user', UserSchema);

module.exports = User



