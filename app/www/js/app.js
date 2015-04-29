'use strict'

angular.module('app', 
  ['ionic', 
  'app.controllers', 
  'app.services', 
  'ngCordova', 
  'ngMap'])
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
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })
    .state('weddings', {
      url: '/weddings',
      templateUrl: 'templates/weddings.html',
      controller: 'WeddingsController'
    })
    .state('layout',{
      url: '/layout',
      abstract: true,
      controller: 'LayoutController',
      templateUrl: 'templates/layout.html'
    })
    .state('layout.detail',{
      url : '/:weddingId',
      templateUrl: 'templates/wedding-detail.html',
      controller: 'WeddingDetailController'
    })
    .state('layout.photos',{
      url:'/:weddingId/photos',
      templateUrl:'templates/photos.html',
      controller: 'PhotosController'
    })
    .state('layout.attendees',{
      url : '/:weddingId/attendees',
      templateUrl: 'templates/attendees.html',
      controller: 'AttendeesController'
    })
    .state('layout.comments',{
      url:'/:weddingId/comments',
      templateUrl:'templates/comments.html',
      controller: 'CommentsController'
    })
    .state('layout.menu',{
      url:'/:weddingId/menu',
      templateUrl:'templates/menu.html',
      controller: 'MenuController'
    })
    .state('layout.map',{
      url:'/:weddingId/map',
      templateUrl:'templates/map.html',
      controller: 'MapController'
    });

    $urlRouterProvider.otherwise('/login');

  });
