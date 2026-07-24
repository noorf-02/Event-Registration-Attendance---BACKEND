const express = require('express');
const Router = express.Router();
const { signUp, logIn } = require('../CONTROLLER/auth');

Router.post('/signUp', signUp);
Router.post('/logIn', logIn);

module.exports = Router;