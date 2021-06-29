
function RegisterUser($scope, $uibModal, mainService) {
    let vm = this;
   //function to register a user
    $scope.RegisterUser=function() {    
        let user = {           
            name:$scope.name,
            email:$scope.email,
            password:$scope.password,
            password2:$scope.password2
         }
         value = 'user/register'
        //function to verify signup success 
         mainService.add(value, user).then(function(response) {   
            vm.login = response.data;  
            if(response.data._id!=null){
                document.getElementById("rgistermsg").innerHTML = 'User Registered Successfull';     //display sucessfull registration message        
            }
            else{
            $scope.a = false; //consition to hanle ng-show  
            document.getElementById("rgistermsg").innerHTML = response.data.error;  //to display error
           }
           })  
        clearData();
    }
    //function to clear placeholder after submit
    function clearData() {        
        $scope.name='';
        $scope.email='';
        $scope.password='';
        $scope.password2='';
    } 
}
 
 app.component('register',{
     templateUrl: 'components/register/register.html',
     controller: RegisterUser,
     controllerAs: 'pc',
 })
 
