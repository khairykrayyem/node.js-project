const Employee = require('../models/EmployeeModel');

const getallEmployee = () => {
  return Employee.find({});
};

const getEmployeebyid = ({ id }) => {
  return Employee.findOne({ id: id });
};

const addEmployee = async ({  firstName, lastName, startWorkYear, departmentID }) => {
  const newemp = new Employee({  firstName, lastName, startWorkYear, departmentID });
  console.log("Adding new employee:", newemp);
  await newemp.save();
  console.log('Employee added:', newemp);

  return newemp;
}; 
  
const updateEmployeebyid = async ({ id, emp }) => {
  await Employee.findByIdAndUpdate(id, emp);
  return 'Updated!';
};

const deleteEmployeebyid = async ({ id }) => {
  id=id.toString();
  await Employee.findByIdAndDelete(id);
  return 'Deleted!';
}; 



module.exports = {
  getallEmployee,
  getEmployeebyid,
  addEmployee,
  updateEmployeebyid,
  deleteEmployeebyid,
};









/*const fs = require('fs');
const path = require('path');
const EmployeePath = path.join(__dirname, '../configs/Employees.json');
let Employee = require(EmployeePath);

// פונקציה לעדכון קובץ JSON
const saveEmployees = () => {
  fs.writeFileSync(EmployeePath, JSON.stringify(Employee, null, 2), 'utf8');
};

const getallEmployee = () => {
  return Employee;
};

const getEmployeebyid = (args) => {
  const { id } = args;
  return Employee.find((p) => p.id === id);
};

const addEmployee = (args) => {
  const { per } = args;
  Employee.push(per);
  saveEmployees(); // שמירה לקובץ
  return 'Created';
};

const updateEmployeebyid = (args) => {
  const { per } = args;
  const index = Employee.findIndex((p) => p.id === per.id);
  if (index !== -1) {
    Employee[index] = { ...Employee[index], ...per }; // PATCH
    saveEmployees(); // שמירה לקובץ
    return 'Updated';
  }
  return 'Wrong ID';
};

const deleteEmployeebyid = (args) => {
  const { id } = args;
  const index = Employee.findIndex((p) => p.id === id);
  if (index !== -1) {
    Employee.splice(index, 1);
    saveEmployees(); // שמירה לקובץ
    return 'Deleted';
  }
  return 'Wrong ID';
};

module.exports = {
  getallEmployee,
  getEmployeebyid,
  addEmployee,
  updateEmployeebyid,
  deleteEmployeebyid,
};
*/








/*const Employee = require('../configs/Employees.json');


const getallEmployee = () => {
  return Employee;
};

const getEmployeebyid = (args) => {
  const { id } = args;
  return Employee.find((p) => p.id === id);
};


const addEmployee = (args) => {
  const { per } = args;
  Employee.push(per);
  return 'Created';
};

const updateEmployeebyid = (args) => {
  const { per } = args;
  const index = Employee.findIndex((p) => p.id === per.id);
  if (index !== -1) {
    // persons[index] = per; // PUT
    Employee[index] = { ...Employee[index], ...per }; // PATCH
    return 'Updated';
  }
  return 'Wrong ID';
};

const deleteEmployeebyid = (args) => {
  const { id } = args;
  const index = Employee.findIndex((p) => p.id === id);
  if (index !== -1) {
    Employee.splice(index, 1);
    return 'Deleted';
  }
  return 'Wrong ID';
};

module.exports = {
  getallEmployee,
  getEmployeebyid,
  addEmployee,
  updateEmployeebyid,
  deleteEmployeebyid,
};*/