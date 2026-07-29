const express = require('express');
const Router = express.Router();
const { createEvent, getEvents } = require('../CONTROLLER/event');

Router.post('/', createEvent);
Router.get('/', getEvents);

module.exports = Router;