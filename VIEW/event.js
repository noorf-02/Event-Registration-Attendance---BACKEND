const express = require('express');
const Router = express.Router();
const { createEvent, getEvents, getSingleEvent, deleteEvent, editEvent } = require('../CONTROLLER/event');

Router.post('/', createEvent);
Router.get('/', getEvents);
Router.get('/:id', getSingleEvent);
Router.delete('/:id', deleteEvent);
Router.patch('/:id', editEvent);

module.exports = Router;