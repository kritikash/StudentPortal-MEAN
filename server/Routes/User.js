
const express = require('express');
const UserRoute = express.Router();
const UserController = require('../Controllers/User');

//User Routes
UserRoute.post('/register', UserController.register );
UserRoute.post('/login', UserController.login );

module.exports = UserRoute;
