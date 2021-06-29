const mongoose = require('mongoose');

const student = new mongoose.Schema({

  name: {
    type: String, 
    required: true
  },

  class: {
    type: Number, 
    required: true
  }, 

  schoolName:{
    type: String, 
    required: true
  },

  sub1: {
    type: Number, 
    required: true
  }, 

  sub2: {
    type: Number, 
    required: true
  }, 
  
  
  


}
);

module.exports = Student = mongoose.model('student', student);
