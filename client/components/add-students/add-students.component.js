function AddStudentController(mainService, $scope, Studentfactory) { 
    

   let studentobj = new Studentfactory();
   //to add student
    $scope.AddStudent=function($http) {               
        let student = {           
            name:$scope.name,
            class:$scope.class,
            sub1:$scope.sub1,
            sub2:$scope.sub2,
            schoolName:$scope.schoolName,
         }
    //factory to validate student data
        studentobj.addStudentdata(student); 
        clearData();
     }

    //function to clear placeholders after submit
     function clearData() {        
        $scope.name='';
        $scope.class='';
        $scope.sub1='';
        $scope.sub2='';
        $scope.schoolName='';
    }

}

app.component('addStudents',{
    templateUrl: 'components/add-students/add-students.html',
    controller: AddStudentController,
    controllerAs: 'vm',
})





