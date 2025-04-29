const Department = require('../models/DepartmentModel');

const getallDepartment = () => {
  return Department.find({});
};

const getDepartmentbyid = ({ id }) => {
  return Department.findOne({ id: id });
};
 
const addDepartment = async ({ name, manager }) => {
  console.log("Adding department with data:", name, manager);
  const newdepartment = new Department({ name, manager });
  newdepartment.id = newdepartment._id.toString();
  await newdepartment.save();
  console.log("Department saved:", newdepartment);
  return newdepartment;
};

const updateDepartmentbyid = async ({ id, name, manager }) => {
  console.log( id, name, manager)
  await Department.findOneAndUpdate({id, email}, {name, manager}, { new: true });
  
  return 'Updated!';
};

const deleteDepartmentbyid = async ({ id }) => {
  console.log("ID received:", id); 
  const deletedDepartment = await Department.findOneAndDelete({ id: id });
  console.log("Deleted Department:", deletedDepartment);

  if (deletedDepartment) {
    return "Department deleted successfully";
  } else {
    throw new Error("Department not found");
  }
}

/*
const deleteDepartmentbyid = async ({ id }) => {
  const result = await Department.findOneAndDelete({ id: id });
  if (result) {
    console.log("Department deleted successfully");
    return "Department deleted successfully";
  } else {
    console.log("No department found with this ID");
    throw new Error("Department not found");
  }

};
*/


module.exports = {
  getallDepartment,
  getDepartmentbyid,
  addDepartment,
  updateDepartmentbyid,
  deleteDepartmentbyid,
};










/*const fs = require('fs');
const path = require('path');
const DepartmentPath = path.join(__dirname, '../configs/Department.json');
let Department = require(DepartmentPath);

const saveDepartments = () => {
  fs.writeFileSync(DepartmentPath, JSON.stringify(Department, null, 2), 'utf8');
};

const getallDepartment = () => {
  return Department;
};

const getDepartmentbyid = (args) => {
  const { id } = args;
  return Department.find((p) => p.id === id);
};

const addDepartment = (args) => {
  const { dep } = args;
  Department.push(dep);
  saveDepartments(); // שמירה לקובץ
  return 'Created';
};

const updateDepartmentbyid = (args) => {
  const { dep } = args;
  const index = Department.findIndex((p) => p.id === dep.id);
  if (index !== -1) {
    Department[index] = { ...Department[index], ...dep }; // PATCH
    saveDepartments(); // שמירה לקובץ
    return 'Updated';
  }
  return 'Wrong ID';
};

const deleteDepartmentbyid = (args) => {
  const { id } = args;
  const index = Department.findIndex((p) => p.id === id);
  if (index !== -1) {
    Department.splice(index, 1);
    saveDepartments(); // שמירה לקובץ
    return 'Deleted';
  }
  return 'Wrong ID';
};

module.exports = {
  getallDepartment,
  getDepartmentbyid,
  addDepartment,
  updateDepartmentbyid,
  deleteDepartmentbyid,
};

*/







/*const Department = require('../configs/Department.json')
 

const getallDepartment = () => {
  return Department;
};

const getDepartmentbyid = (args) => {
  const { id } = args;
  return Department.find((p) => p.id === id);
};


const addDepartment = (args) => {
  const { dep } = args;
  Department.push(dep);
  return 'Created';
};

const updateDepartmentbyid = (args) => {
  const { dep } = args;
  const index = Department.findIndex((p) => p.id === per.id);
  if (index !== -1) {
    // persons[index] = per; // PUT
    Department[index] = { ...Department[index], ...dep }; // PATCH
    return 'Updated';
  }
  return 'Wrong ID';
};

const deleteDepartmentbyid = (args) => {
  const { id } = args;
  const index = Department.findIndex((p) => p.id === id);
  if (index !== -1) {
    Department.splice(index, 1);
    return 'Deleted';
  }
  return 'Wrong ID';
};

module.exports = {
  getallDepartment,
  getDepartmentbyid,
  addDepartment,
  updateDepartmentbyid,
  deleteDepartmentbyid,
};*/