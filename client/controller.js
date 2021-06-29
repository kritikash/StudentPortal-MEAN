
var app= angular.module("mainApp", ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize']);

//main controller
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
     .state('viewschools', {
        url : '/viewSchools',
        template : '<schools-list></schools-list>'
      })
      .state('addschools', {
        url : '/addSchools',
        template : '<add-schools></add-schools>'
      })
      .state('viewstudents', {
        url : '/viewStudents',
        template : '<students-list></students-list>'
      })
      .state('addstudents', {
        url : '/addStudents',
        template : '<add-students></add-students>'
      })
      .state('analytics', {
        url : '/analytics',
        template : '<forms></forms>'
      })
      .state('chatdata', {
        url : '/chats',
        template : '<chats></chats>'
      })
      .state('signup', {
        url : '/register',
        template : '<register></register>'
      })
      .state('login', {
        url : '/login',
        template : '<login></login>'
      })
      .state('dashboard', {
        url : '/dashboard',
        template : '<dashboard></dashboard>'
      })
})

app.controller("CRUD", function($scope) {

  $scope.isCollapsed = false;

});
