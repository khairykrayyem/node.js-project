const User = require('../models/userModel.js');

const getallUsers = async() => {
  return await User.find({});
};

const getUserbyid =async ({ id }) => {
  return await User.findOne({ id: id });
};

 
 
module.exports = {
  getallUsers,
  getUserbyid,
}; 
 





/*const axios = require('axios');

const fetchUsersFromAPI = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

const getallUsers = async () => {
  const User =  await fetchUsersFromAPI();
  return User
};

// פונקציה להחזרת משתמש לפי ID
const getUserbyid = async (args) => {
  const { id } = args;
  const users = await fetchUsersFromAPI();
  return users.find((user) => user.id === id);
};

module.exports = { 
  getallUsers,
  getUserbyid,
};

*







/*const axios = require('axios');

const fetchUsersFromAPI = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/Users');
    return response.data;
  } catch (error) {
    console.error('Error fetching Users:', error);
    return [];
  }
};

const getallUsers = async () => {
  return await fetchUsersFromAPI();
};

const getUserbyid = async (args) => {
  const { id } = args;
  const Users = await fetchUsersFromAPI();
  return Users.find((User) => User.id === id);
};

module.exports = {
  getallUsers,
  getUserbyid,
};*/