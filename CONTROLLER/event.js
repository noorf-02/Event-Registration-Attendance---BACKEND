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

const getSingleEvent = async (req,res)=>{
    const singleEvent = await Event.findById(req.params.id);
    res.send(singleEvent)
};

const deleteEvent = async (req,res)=>{
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    res.send('Event Deleted');
    console.log('Deleted');
};

const editEvent = async (req,res)=>{
    res.send("Edit Event");
};

module.exports = {createEvent, getEvents, getSingleEvent, deleteEvent, editEvent};