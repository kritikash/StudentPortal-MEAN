function Addchat($scope, $uibModal, AuthFactory) {
  let vm =this;
  //Auth check
  vm.token=  AuthFactory.authToken();
  //condition to display data on basis of auth check
  if(vm.token!=undefined){
      $scope.a = true; //to allow chat access
  }
  else{
      $scope.a = false; //to redirect to login page
  }   
  //socket connection
  var sock = new WebSocket("ws://localhost:5001");

  sock.onopen = function(event){
    console.log('conneted through socket', event); //connection check
    setTimeout(function(){
    }, 100);
  }

  $scope.msgthreadlists = [];
  $scope.sendmsg=function() {   
    var msg = $scope.msg;
    sock.send(msg);   //send message
    clearData();
  }
  //to clear placeholder after send 
  function clearData() {        
    $scope.msg='';
 }
  // on message display
  sock.onmessage = function(event){  
    document.getElementById("chats").innerHTML += event.data + "<br>";
    $scope.msgthreadlists.push(event.data);
  }
 
  //allows to send message on hitting enter
  document.getElementById('chat-section')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });

}
 app.component('chats',{
     templateUrl: 'components/chats/chats.html',
     controller: Addchat,
     controllerAs: 'pc',
 })
 


 
 