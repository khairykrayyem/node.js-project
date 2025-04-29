const mongoose = require('mongoose');

const ShiftSchema = new mongoose.Schema(
  {
    id: String,
    date: String,
    startingHour: Number,
    endingHour: Number
  },
  { versionKey: false }
);

const Shift = mongoose.model('shift', ShiftSchema);

module.exports = Shift