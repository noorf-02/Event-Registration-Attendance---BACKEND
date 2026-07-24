const mongoose = require('mongoose');

const signUp = async (req,res)=>{
    res.send('signUp');
};

const logIn = async (req,res)=>{
    res.send('logIn')
};

module.exports = { signUp, logIn }