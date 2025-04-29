const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose
        .connect('mongodb://localhost:27017/testDB')
        .then(() => console.log('Connected to users'))
        .catch((error) => console.log(error));
};

module.exports = connectDB;






/*const mongoose = require('mongoose');


  const connectDB = mongoose
    .connect('mongodb://localhost:27017/testDB')
    .then(() => console.log('Connected to users'))
    .catch((error) => console.log(error));

    module.exports= connectDB;


*/









/*
const mongoose = require('mongoose');


  mongoose
    .connect('mongodb://localhost:27017/testDB')
    .then(() => console.log('Connected to users'))
    .catch((error) => console.log(error));


*/