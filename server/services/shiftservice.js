const Shift = require('../models/ShiftModel');

const getallShift = () => {
  return Shift.find({});
};

const getShiftbyid = ({ id }) => {
  return Shift.findOne({ id: id });
};


module.exports = {
  getallShift,
  getShiftbyid,
  
};
