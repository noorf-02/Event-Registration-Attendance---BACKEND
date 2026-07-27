const mongoose = require('mongoose');
const auth = require('../MODEL/auth');
const bcrypt = require('bcryptjs');

const signUp = async (req,res)=>{
    try{
        const { username, email,password,role } = req.body;
    const existingUser = await auth.findOne({email});
    const existingName = await auth.findOne({username});

    if(existingUser){
        return res.status(400).json({
            msg: "This email is already registered"
        });
    };

    if(existingName){
        return res.status(400).json({
            msg: "Username already in use"
        });
    };

    const hashedPassword = await bcrypt.hash(password,10);
    const signedUp = await auth.create({username:username, email:email, password:hashedPassword, role:role});
    res.status(201).json({
        msg:"User successfully created",
        User: signedUp
    })
    } catch(error){
        console.log("Sign Up Failed",error);
        res.status(500).json({
            msg:"Something went wrong during signup",
            error:error
        })
    }
    

};

const logIn = async (req,res)=>{
    try{
        const { username, password } = req.body;
    const existingUser = await auth.findOne({username});
    if(!existingUser){
       return res.status(400).json({
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
        role:existingUser.role,
        username:existingUser.username
    });
    } catch(error){
        console.log("Something went wrong during log in");
        res.status(500).json({
            msg:"Log In failed",
            error: error
        })
    }
};

module.exports = { signUp, logIn }