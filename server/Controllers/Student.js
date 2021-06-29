const Student  = require('../models/Student');

exports.getStudents = async (req, res) => {
    try {
      console.log('check');
      const students = await Student.find();
      res.json(students);
    }
    catch(err){
      res.json({ message:err});
    }
}

exports.addStudents =  async (req, res) => {
    
    console.log(req.body, 'addstudenyts');
    let students = new Student({
      name: req.body.name,
      class: req.body.class,
      schoolName: req.body.schoolName,
      sub1: req.body.sub1,
      sub2: req.body.sub2,
    });
    console.log(students);
    try {
      console.log('inside try');
      const studentModel = await students.save();
      res.json(studentModel); 
      console.log('stduent created'); 
    }
    catch(err){
      res.json({ message:err});
    }
  }

exports.deleteStudent = async (req, res) => {
    const id = req.params.id
    try {
      const deleteStudent = await Student.findByIdAndDelete(id);
      res.json(deleteStudent);  
    }
    catch(err){
      res.json({ message:err});
      console.log(err);
    }
  }    

//top student
exports.topper= async (req, res) => {
  try {     
    const students = await Student.aggregate([
      {
        $project: {
          marks: { $sum: ["$sub1", "$sub2"]},
          name: "$name", 
        },
      }, 
      {$sort: {marks: -1}},
      {$limit: 1}
    ]);
    res.json(students);
  }
  catch(err){
    res.json({ message:err});
  }
}

//top Subject
exports.topsubject= async (req, res) => {
  try {     
    const students = await Student.aggregate([
      {
        $group: {
            _id: 'null',
            sub1marks: { $sum: '$sub1' }, 
            sub2marks: { $sum: '$sub2' }
        },       
     },
      {
        $project: {   
          name: {$cond: { if: { $gt: [ "$sub1marks", "$sub2marks" ] }, then: "sub1", else: "sub2" }},              
          marks: {$max :["$sub1marks" , "$sub2marks"]},                    
        },
      }, 
      {$sort: {marks: -1}},
      {$limit: 1}
    ]);
    res.json(students);
  }
  catch(err){
    res.json({ message:err});
  }
}


//top School
exports.topschool= async (req, res) => {
  try {     
    const students = await Student.aggregate([
      {
        $group: {
            _id: '$schoolName',
            sub1marks: { $sum: '$sub1' }, 
            sub2marks: { $sum: '$sub2' }
        },       
     },
      {
        $project: {    
          name : "$_id",        
          marks: {$sum :["$sub1marks" , "$sub2marks"]}                 
        },
      }, 
      {$sort: {marks: -1}},
      {$limit: 1}
    ]);
    res.json(students);
  }
  catch(err){
    res.json({ message:err});
  }
}

  
// Ranking Wise list of students  
exports.ranklist= async (req, res) => {
    try {
      console.log('inside conhfhf');     
      const students = await Student.aggregate([
        {
          $project: {
            marks: { $sum: ["$sub1", "$sub2"]},  
            name: "$name",          
          },
  
        }, 
        {$sort: {marks: -1}}
      ]);
      res.json(students);
    }
    catch(err){
      res.json({ message:err});
    }
}

// Ranking Wise list of school  
exports.schoolranklist= async (req, res) => {
  try {     
    const students = await Student.aggregate([
      {
        $group: {
            _id: '$schoolName',
            sub1marks: { $sum: '$sub1' }, 
            sub2marks: { $sum: '$sub2' }
        },       
     },
     {
     $lookup:
     {
         from: "school",
         localField: "schoolName",
         foreignField: "name",
          as: "school_data"
     }
     },
      {
        $project: {  
          name : "$_id",   
          school_name : "$school_name",              
          marks: {$sum :["$sub1marks" , "$sub2marks"]}                 
        },
      }, 
      {$sort: {marks: -1}},
    ]);
    res.json(students);
  }
  catch(err){
    res.json({ message:err});
  }
}


// top 5 students of subject 1  
  exports.topsub1= async (req, res) => {
    try {     
      const students = await Student.aggregate([
        {
          $project: {
            marks: "$sub1",  
            name: "$name",          
          },  
        },         
        {$sort: {marks: -1}},
        {$limit: 3}
      ]);
      res.json(students);
    }
    catch(err){
      res.json({ message:err});
    }
}

// top 5 students of subject 2 
exports.topsub2= async (req, res) => {
  try {     
    const students = await Student.aggregate([
      {
        $project: {
          marks: "$sub2",  
          name: "$name",          
        },

      },
      {$sort: {marks: -1}},
      {$limit: 3}
    ]);
    res.json(students);
  }
  catch(err){
    res.json({ message:err});
  }
}



