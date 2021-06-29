const express = require('express');
const StudentController = require('../Controllers/Student');
const Studentroute = express.Router();
const Userroute = express.Router();

//Student Routes
Studentroute.get('/', StudentController.getStudents);
Studentroute.post('/', StudentController.addStudents);
Studentroute.delete('/:id', StudentController.deleteStudent );
Studentroute.get('/analytics/topsub1', StudentController.topsub1 );
Studentroute.get('/analytics/topsub2', StudentController.topsub2 );
Studentroute.get('/analytics/topper', StudentController.topper );
Studentroute.get('/analytics/ranklist', StudentController.ranklist );
Studentroute.get('/analytics/schoolranklist', StudentController.schoolranklist );
Studentroute.get('/analytics/topper', StudentController.topper );
Studentroute.get('/analytics/topschool', StudentController.topschool );
Studentroute.get('/analytics/topsubject', StudentController.topsubject );

module.exports = Studentroute;
