const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    startWorkYear: { type: String, required: true },
    departmentID: { type: String, required: true }
  },
  { versionKey: false }
);

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee