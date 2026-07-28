const express = require('express');
const Router = express();
const { createEvent, getEvents } = require('../CONTROLLER/event');

Router.post('/create-event', createEvent);
Router.get('/get-events', getEvents);

module.exports = Router;