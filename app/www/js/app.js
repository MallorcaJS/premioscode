// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers', 'app.services', 'ngCordova'])
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
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('layout',{
      url: '/layout',
      abstract: true,
      templateUrl: 'templates/layout.html'
    })
    .state('layout.login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController'
    })
    .state('layout.profile',{
      url : '/profile',
      TemplateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl'
    })
    //Listado de atendees TODO Aleix
    .state('layout.atendees',{
      url : '/atendees',
      TemplateUrl: 'templates/atendees.html',
      controller: 'atendeesCtrl'
    })
    .state('layout.menu',{
      url:'/menu',
      templateUrl:'templates/menu.html',
      controller: 'menuController'
    })
    //Fotos TODO Diego Xisco
    .state('layout.photos',{
      url:'/photos',
      templateUrl:'templates/photos.html',
      controller: 'photosController'
    })
    //Comments TODO Kevin
    .state('layout.comments',{
      url:'/comments',
      templateUrl:'templates/comments.html',
      controller: 'commentsController'
    });

    $urlRouterProvider.otherwise('/layout/login');

  });
