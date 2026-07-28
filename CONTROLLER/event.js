const mongoose = require('mongoose');
const Event = require("../MODEL/event");

const createEvent = async (req,res)=>{
    res.send('create an event');
} ;

const getEvents = async (req,res)=>{
    res.send("Get all events");
};

module.exports = {createEvent, getEvents};