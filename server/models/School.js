const mongoose = require('mongoose');
const schoolsArray = require('../Insertions/insertSchool');
const school = new mongoose.Schema({

  schoolName: {
    type: String, 
    required: true
  },
  location: {
    type: String,
    required: true
  }
}
);


School = mongoose.model('school', school);
//to insert bulk data
// School.insertMany(schoolsArray).then(function(){
//   console.log("Data inserted")  // Success
// }).catch(function(error){
//   console.log(error)      // Failure
// });

module.exports = School;