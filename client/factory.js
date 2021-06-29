// factory to calculate the total marks obtained by students
app.factory('mainFactory', function() {
    let factoryObject = {};
    factoryObject.getTotal = function(marks1, marks2) { 
        const number = (parseInt(marks1) + parseInt(marks2));
        return number;
    };
    return factoryObject;
});

// factory to handle bearer token and authorization 
app.factory('AuthFactory', function() {
  let factoryObject = {};
  var token1;
  factoryObject.getToken = function(token) { 
    console.log('logout', token);
    token1 = token;
    return token
  };  
  console.log(token1, 'dh');
  
  factoryObject.authToken = function() { 
    return token1
  }; 
  return factoryObject;
});

//factory to Validate school data
app.factory('Schoolfactory', function(mainService) {
    function Schoolfactory(schoolName, location){
      let self = this;
      self.schoolName = schoolName;
      self.location = location;   
    }  
    let value ='school';

    Schoolfactory.prototype = {
      addSchooldata : function(school){
        mainService.add(value, school)
      }, 
      deleteSchooldata : function(index){
        mainService.delete(value, index)
      }        
    }
    return (Schoolfactory);    
});

//factory to Validate student data
app.factory('Studentfactory', function(mainService) {
     let value ='student';  
      function Studentfactory(name, className, sub1, sub2, schoolName){
      let self = this;
      self.name = name;
      self.className = className;   
      self.sub1 = sub1;
      self.sub2 = sub2;  
      self.schoolName = schoolName;
    }  
  
    Studentfactory.prototype = {
      addStudentdata : function(student){
        mainService.add(value, student)
      }, 
      deleteStudentdata : function(index){
        mainService.delete(value, index)
      }        
    }
    return (Studentfactory);    
});


// app.factory('Schoolfactory', function(mainService, $q) {

//     function Schoolfactory(schoolName, location){
//       let self = this;
//       self.schoolName = schoolName;
//       self.location = location;   
//     }  
//     Schoolfactory.prototype = {
//       addSchooldata : function(school){
//         return $q(function(resolve, reject) {
//             if (school.length === 0) {
//               return reject("Cannot add data")
//             } else {
//                 let value ='school';
//                 return resolve (mainService.add(value, school))
//             }
//           });
      
//       }
//     }
//     return (Schoolfactory);    
// });


