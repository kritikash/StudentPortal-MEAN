function AddForm($scope, $uibModal, mainService) {
    var vm = this;
    const value = 'student';

    //to get the students ranking list
    $scope.getstudentranking=function() {
         mainService.getRankingStudents(value).then(function(response) {        
            vm.students = response.data;  
        })
    } 
    //to get schools ranking list
    $scope.getschoolranking=function() {
        mainService.getRankingSchools(value).then(function(response) {        
           vm.students = response.data;  
       })
   } 
   //to get the topeper of subject 1
    $scope.getsub1topper=function() {
        mainService.gettopsub1(value).then(function(response) {        
           vm.students = response.data;  
       })
   } 
    //to get the topeper of subject 2
   $scope.getsub2topper=function() {
        mainService.gettopsub2(value).then(function(response) {        
            vm.students = response.data;  
       })
    } 
    //to get the topper combining all schools and all subjects
    $scope.gettopper=function() {
        mainService.gettopstudent(value).then(function(response) {        
        vm.students = response.data;  
       })   
    } 
    //to get the best performing subject
    $scope.getsubject=function() {
        mainService.gettopsubject(value).then(function(response) {        
        vm.students = response.data;  
       })   
    } 
    //to get the best performing schools
    $scope.gettopschool=function() {
        mainService.gettopschool(value).then(function(response) {        
        vm.students = response.data;  
       })   
    }     
}
 
 app.component('forms',{
     templateUrl: 'components/analytics/forms.html',
     controller: AddForm,
     controllerAs: 'vm',
 })
 


  
 
 