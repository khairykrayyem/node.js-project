const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const authController = require('./models/authController');
const connectDB = require('./configs/testDB');
require('./models/userModel')

const userservice = require('./services/userservice');
const departmentservice = require('./services/departmentservice');
const employeeservice = require('./services/employeeservice');
const shiftservice = require('./services/shiftservice');

 
const schema = buildSchema(`
  
    input UserInput
      {
        name: String
        email: String
      }

      input DepartmentInput {
        id: String
        name: String
        manager: String
}
    input EmployeeInput{
        id: String
        firstName: String
        lastName: String
        startWorkYear: Int
        departmentID: Int
    }

    type User {
        id: Int 
        name: String
        numofaction: Int
    }

    type Department {
        id: String
        name: String
        manager: String
    }

    type Employee {
        id: String
        firstName: String
        lastName: String
        startWorkYear: Int
        departmentID: Int
    }

    type Shift {
        id: String
        date: String
        startingHour: Int
        endingHour: Int
    }

    type Query {
        allUsers: [User]
        allDepartment: [Department]
        allEmployee: [Employee]
        allShift: [Shift]
        getUsers(id: Int): User
        getDepartment(id: String): Department
        getEmployee(id: Int): Employee
        getShift(id: Int): Shift
    }

    type Mutation {
        addDepartment(name: String, manager: String): Department
        updateDepartment(id: String, name: String, manager: String): Department
        deleteDepartment(id: String): String

        addEmployee(firstName: String, lastName: String, startWorkYear: Int, departmentID: Int): Employee
        updateEmployee(id: Int, firstName: String, lastName: String, startWorkYear: Int, departmentID: Int): Employee
        deleteEmployee(id: Int): String

    }
`);


const root = {
  allUsers: userservice.getallUsers,
  getUsers: userservice.getUserbyid,

  allDepartment: departmentservice.getallDepartment,
  getDepartment: departmentservice.getDepartmentbyid,
  addDepartment: departmentservice.addDepartment,
  updateDepartment: departmentservice.updateDepartmentbyid,
  deleteDepartment: departmentservice.deleteDepartmentbyid,

  allEmployee: employeeservice.getallEmployee,
  getEmployee: employeeservice.getEmployeebyid,
  updateEmployee: employeeservice.updateEmployeebyid,
  deleteEmployee: employeeservice.deleteEmployeebyid,

  allShift: shiftservice.getallShift,
  getShift: shiftservice.getShiftbyid,
};

const app = express();
const PORT = 4000; 

app.use(cors());
connectDB();


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.post('/auth/login', authController.loginUser);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});










/*const express = require('express');
const cors = require('cors');

// mount a GraphQL API server on the '/persons' HTTP endpoInt
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const userservice = require('./services/userservice');
const departmentservice = require('./services/departmentservice');
const employeeservice = require('./services/employeeservice');
const shiftservice = require('./services/shiftservice');

// construct a schema, using GraphQL schema language
const schema = buildSchema(`
    input User {
      id: Int
      name: String
      numofaction: Int
    }

    type Department {
      id: Int
      name: String
      manager: String
    }

    type Employee {
        id: Int
        firstName: String
        lastName: String
        startWorkYear: Int
        departmentID: Int
    }

    type Shift {
        id: Int
        date: String
        startingHour: Int
        endingHour: Int
    }

    type Query {
      allusers: [User]
      alldepatment: [Department]
      allemployee: [Employee]
      allshift: [Shift]
      getusers(id: Int): User
      getdepartment(id: Int): Department
      getemployee(id: Int): Employee
      getshift(id: Int): Shift
    }

    type Mutation {
        addDepartment(name: String, manager: String): Department
        updateDepartment(id: Int, name: String, manager: String): Department
        deleteDepartment(id: Int): String

        addEmployee(firstName: String, lastName: String, startWorkYear: Int, departmentID: Int): Employee
        updateEmployee(id: Int, firstName: String, lastName: String, startWorkYear: Int, departmentID: Int): Employee
        deleteEmployee(id: Int): String

        addShift(date: String, startingHour: Int, endingHour: Int, employees: [String]): Shift
        updateShift(id: Int, date: String, startingHour: Int, endingHour: Int, employees: [String]): Shift
    }
`);

// The 'root' provides a resolver function for each API endpoint
const root = {
  allusers: userservice.getallusers,
  getuser: userservice.getuserbyid,

  alldepatment: departmentservice.getalldepartment,
  getdepartment: departmentservice.getdepartmentbyid,
  updateDepartment: departmentservice.updateDepartmentbyid,
  deleteDepartment: departmentservice.deleteDepartmentbyid,

  allemployee: employeeservice.getallemployee,
  getemployee: employeeservice.getemployeebyid,
  updateEmployee: employeeservice.updateEmployeebyid,
  deleteEmployee: employeeservice.deleteEmployeebyid,

  allshift: shiftservice.getallshift,
  getshift: shiftservice.getshiftbyid,
};

const app = express();
const PORT = 4000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});*/


















/*const express = require('express');
const cors = require('cors');

// mount a GraphQL API server on the '/persons' HTTP endpoint
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const Userservice = require('./services/Userservice');
const Departmentservice = require('./services/Departmentservice');
const Employeeservice = require('./services/Employeeservice');
const Shiftservice = require('./services/Shiftservice');




// construct a schema, using GraphQL schema language
const schema = buildSchema(`
    input User {
      id: Int
      name: String
      numofaction:Int
    }

    type Department {
      id: Int
      name: String
      manger: String
    }
      type Employee {
        id: Int
        firstName: String
        lastName: String
        startWorkYear: Int
        DepartmentID: Int
    }
     type Shift {
        id: Int
        date: String
        startingHour: Int
        endingHour: Int
        }

    type Query {
    allUsers:[User]
      alldepatment: [Department]
      allEmployee:[Employee]
      allShift:[Shift]
      getUsers(id: Int): User
      getDepartment(id:int):Department
      getEmployee(id:int):Employee
      getShift(id:int):Shift
    }

    type Mutation {
        addDepartment(name: String, manager: String): Department
        updateDepartment(id: Int, name: String, manager: String): Department
        deleteDepartment(id: Int): String

        addEmployee(firstName: String, lastName: String, startWorkYear: Int, DepartmentId: String): Employee
        updateEmployee(id: Int, firstName: String, lastName: String, startWorkYear: Int, DepartmentID: String): Employee
        deleteEmployee(id: Int): String

        addShift(date: String, startingHour: Int, endingHour: Int, Employees: [String]): Shift
        updateShift(id: Int, date: String, startingHour: Int, endingHour: Int, Employees: [String]): Shift
    }
`);

   

// The 'root' provides a resolver function for each API endpoint
const root = {
  allUsers:Userservice.getallUsers,
  getUser:Userservice.getUserbyid,

  alldepatment: Departmentservice.getallDepartment,
  getDepartment: Departmentservice.getDepartmentbyid,
  updateDepartment:Departmentservice.updateDepartmentbyid,
  deleteDepartment: Departmentservice.deleteDepartmentbyid,

  allEmployee:Employeeservice.getallEmployee,
  getEmployee: Employeeservice.getEmployeebyid,
  updateEmployee: Employeeservice.updateEmployeebyid,
  deleteEmployee: Employeeservice.deleteEmployeebyid,

  allShift: Shiftservice.getallShift,
  getShift: Shiftservice.getShiftbyid,
}


const app = express();
const PORT = 4000;

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
})*/