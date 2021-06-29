const School  = require('../models/School');

exports.getSchool = async (req, res) => {
  console.log('get school');
  try {    
    const schools = await School.find();
    res.json(schools);
  }
  catch(err){
    res.json({ message:err});
    }
  }

exports.addSchool = async (req, res) => {
  console.log('hi');
  console.log('req', req.body);
    let schools = new School({
      schoolName: req.body.schoolName,
      location: req.body.location,
    });
    try {
      const schoolModel = await schools.save();
      res.json(schoolModel);  
    }
    catch(err){
      res.json({ message:err});
    }
  }

exports.deleteSchool = async (req, res) => {
    const id = req.params.id
    try {
      const deleteSchool = await School.findByIdAndDelete(id);
      res.json(deleteSchool);  
    }
    catch(err){
      res.json({ message:err});
      console.log(err);
    }
  }  