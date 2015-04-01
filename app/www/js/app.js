// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', [
  'ionic', 
  'app.controllers',
  'app.services',
  'ngCordova'])

.constant("api", {
    "url": "http://localhost:8080",
    "static_url" : "images from client"
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $controllerProvider) {

  $controllerProvider.allowGlobals();
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController'
    })
    .state('profile',{
      url : '/profile',
      TemplateUrl: 'templates/profile.html',
      //controller: 'ProfileCtrl'
    })
    //Listado de atendees TODO Aleix
    .state('atendees',{
      url : '/atendees',
      TemplateUrl: 'templates/atendees.html',
      //controller: 'atendeesCtrl'
    })
    //Menu TODO Xisco Diego
    .state('menu',{
      url:'/menu',
      templateUrl:'templates/menu.html',
      controller: 'menuCtrl'
    })
    //Fotos TODO Diego Xisco
    .state('fotos',{
      url:'/fotos',
      templateUrl:'templates/fotos.html',
      //controller: 'fotosCtrl'
    })
    //Comments TODO Kevin
    .state('comments',{
      url:'/comments',
      templateUrl:'templates/comments.html',
      //controller: 'commentsCtrl'
    })

  $urlRouterProvider.otherwise('/login');

});