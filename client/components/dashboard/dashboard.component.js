function DashboardCtrl($scope,AuthFactory) {
    let vm =this;
    //auth check
    vm.token=  AuthFactory.authToken();
    //condition to display content on basis of presence of auth
    if(vm.token!=undefined){
        $scope.a = true; //to allow user to access dashboard
    }
    else{
        $scope.a = false;//to ask user to login
    }   
    //user can logout
    $scope.logout=function() {     
        let token = null;   
        AuthFactory.getToken(token);    
        location.reload();    
      } 
}
 
 app.component('dashboard',{
     templateUrl: 'components/dashboard/dashboard.html',
     controller: DashboardCtrl,
     controllerAs: 'vm',
 })
 


 
 