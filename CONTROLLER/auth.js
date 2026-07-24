const mongoose = require('mongoose');
const auth = require('../MODEL/auth');
const bcrypt = require('bcryptjs');

const signUp = async (req,res)=>{
    const { username, email,password } = req.body;
    const existingUser = await auth.findOne({email});
    const existingName = await auth.findOne({username});

    if(existingUser){
        return res.status(400).json({
            msg: "This email is already registered"
        });
    };

    if(existingName){
        return res.status(400).json({
            msg: "Username already exists"
        });
    };

    const hashedPassword = await bcrypt.hash(password,10);
    const signedUp = await auth.create({username:username, email:email, password:hashedPassword});
    res.status(201).json({
        msg:"User successfully created",
        User: signedUp
    })

};

const logIn = async (req,res)=>{
    const { username, password } = req.body;
    const existingUser = await auth.findOne({username});
    if(!existingUser){
        res.status(400).json({
            msg:"User not registered"
        });
    };
    
    const comparePassword = await bcrypt.compare(password, existingUser.password);
    if(!comparePassword){
       return res.status(400).json({
        msg:"Invalid Username or Password"
        });
    };

    res.status(201).json({
        msg:"User logged In",
        loggedIn:existingUser
    });

};

module.exports = { signUp, logIn }