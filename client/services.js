
app.service('mainService', function($http, $q, AuthFactory) {
  const baseUrl = 'http://localhost:3000/api/'  //baseurl 
    this.get = function(value){     
      //get api call
      return $q(function(resolve, reject) { 
        let token=  AuthFactory.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}               
        if(value.length!=0) {
            console.log(baseUrl + value);
            resolve($http.get(baseUrl + value, {'headers':headers}));  
        } 
        else     
            reject('There is an ERROR');
      })
      .catch(err =>{
        console.log(err, 'ERROR');
      });                   
    };  

    this.add= function(value, data){           
         //post api call
        return $q(function(resolve, reject) {    
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}     
            if(value.length!=0 && data.length!=0) {
              console.log(baseUrl + value);
               resolve($http.post(baseUrl + value , data, {'headers':headers}));                 
            } 
            else     
                reject('There is an ERROR');
        })             
        .catch(err =>{
              return err
        });            
     }; 
    
    this.delete = function(value , index){
       //delete api call
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
            if(value.length!=0) {               
               resolve($http.delete(baseUrl + value +'/' + index, {'headers':headers}));                 
            } 
            else     
                reject('There is an ERROR');
        })             
        .catch(err =>{
              console.log(err);
        });      
    }; 

    this.getRankingStudents = function(value){     
      //api call to get studnets ranking
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/ranklist', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      }; 
 
    this.getRankingSchools = function(value){          
      // api call to schools ranking
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/schoolranklist', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };     

    this.gettopsub1 = function(value){    
      
      //api call to get topper of subject 1
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsub1', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };    
    
    this.gettopsub2 = function(value){  
      
       //api call to get topper of subject 2
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsub2', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };    


    this.gettopstudent = function(value){    
      
      //api call to get the topper 
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topper', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };    

    this.gettopsubject = function(value){   
      
      //api call to get the best subject
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsubject', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };  

    this.gettopschool = function(value){    
      
      //api call to get top school
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topschool', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };            
})


