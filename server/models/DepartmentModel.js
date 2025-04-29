const mongoose = require('mongoose');
 
const DepartmentSchema = new mongoose.Schema(
  { 
      id: { type: String, unique: true },
        name: { type: String, required: true },
        manager: { type: String, required: true }
  },
  { versionKey: false }
); 
 
const Department = mongoose.model('department', DepartmentSchema);

module.exports = Department