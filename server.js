const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const cors = require('cors');
const connectDB = require('./DATABASE CONNECTION/DBconnection');
connectDB();
const authRouter = require('./VIEW/auth');
const eventRouter = require('./VIEW/event');

app.use(cors());
app.use(express.json());
app.use(authRouter); 
app.use(eventRouter); 

app.get('/',(req,res)=>{
    res.send('This is my Homepage for events and registration')
})

app.get('/*path',(req,res)=>{
    res.send("Sorry! This page does not exist");
})

app.listen(port,()=>{
    console.log(`The app is up and running on port ${port}`);
});
