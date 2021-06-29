function LoginCtrl( $scope, mainService, AuthFactory) {
let vm = this;
 //used to login user
   $scope.LoginUser=function() {  console.log('iside f login');
    let user = {           
        email:$scope.email,
        password:$scope.password
    }
   value = 'user/login'
   //login success check
   mainService.add(value, user).then(function(response) { 
    //factory to validate auth token     
    vm.token = response.data.token;  
    AuthFactory.getToken(vm.token);
    //to check login success  
    if(response.data.token!=undefined){
        document.getElementById("loginmsg").innerHTML = 'Login Successfull';  //handling user login 
        $scope.a = true;
    }
    else{        
    $scope.a = false;   
    document.getElementById("loginmsg").innerHTML = 'Invalid email id or password';  //handling error
    }     
   }) 
   //to clear placeholder 
   clearData();
}
//function to clear placeholder
    function clearData() {        
    $scope.name='';
    $scope.email='';
    $scope.password='';
    $scope.password2='';
    } 
}

 app.component('login',{
     templateUrl: 'components/login/login.html',
     controller: LoginCtrl,
     controllerAs: 'vm',
 })
 


 
 