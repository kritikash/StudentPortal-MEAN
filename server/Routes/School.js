const express = require('express');
const Schoolroute = express.Router();
const SchoolController = require('../Controllers/School');

//School Routes

Schoolroute.get('/', SchoolController.getSchool);
Schoolroute.post('/', SchoolController.addSchool );
Schoolroute.delete('/:id', SchoolController.deleteSchool );

module.exports = Schoolroute;
