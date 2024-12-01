const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/employee-management';

const connectDb = () => {
    mongoose.connect(url, () => {
        console.log('Successfully connected to MongoDB');
    });
};

module.exports = connectDb