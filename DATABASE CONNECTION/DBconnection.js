const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.URL).then(()=>{
        console.log("DB has been connected");
    }).catch(err=>{
        console.log("Error occured during DB connection", err);
    })
};

module.exports = connectDB;