const mongoose = require('mongoose');
const Event = require("../MODEL/event");

const createEvent = async (req,res)=>{
    const {title, description,category,organzier,venue,city,startAt,endAt, deadline,capacity} = req.body;
    const createdEvent = await Event.create({title:title,description:description,category:category,organizer:organzier,venue:venue,city:city,startAt:startAt,endAt:endAt,deadline:deadline,capacity:capacity })
    res.send(createdEvent);
} ;

const getEvents = async (req,res)=>{
    const data = await Event.find({});
    res.send(data);
};

module.exports = {createEvent, getEvents};