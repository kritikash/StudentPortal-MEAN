function AddSchoolController(mainService, $scope, Schoolfactory) { 

    //to add school into the db
    $scope.AddData=function() {                      
       let school = {
        schoolName:$scope.schoolName,
        location:$scope.location,
       }
       let schoolobj = new Schoolfactory();
       schoolobj.addSchooldata(school); //factory used to validate data
       clearData();

    }
    //function to clear the placeholder text after submission
    function clearData() {
        $scope.schoolName='';
        $scope.location='';
    }
}

app.component('addSchools',{
    templateUrl: 'components/add-schools/add-schools.html',
    controller: AddSchoolController,
    controllerAs: 'vm',
})





