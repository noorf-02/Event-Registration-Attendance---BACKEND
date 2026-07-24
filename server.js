const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const cors = require('cors');
const connectDB = require('./DATABASE CONNECTION/DBconnection');
connectDB();
const router = require('./VIEW/auth');

app.use(express.json());
app.use(router); 
app.use(cors());

app.get('/',(req,res)=>{
    res.send('This is my Homepage')
})

app.get('/*path',(req,res)=>{
    res.send("Sorry! This page does not exist");
})

app.listen(port,()=>{
    console.log(`The app is up and running on port ${port}`);
});
