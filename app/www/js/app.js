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

    // if(window.cordova){
    //   $cordovaGoogleAnalytics.startTrackerWithId('UA-59328829-1');
    // }
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
      templateUrl: 'app/weddings/weddings.html',
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
      views: {
        'menuContent': {
          templateUrl: "app/weddings/wedding-detail.html",
          controller: 'WeddingDetailController'
        }
      }
    })
    .state('layout.photos',{
      url:'/:weddingId/photos',
      views: {
        'menuContent': {
          templateUrl:'templates/photos.html',
          controller: 'PhotosController'
        }
      }
    })
    .state('layout.attendees',{
      url : '/:weddingId/attendees',
      views: {
        'menuContent': {
          templateUrl:'templates/attendees.html',
          controller: 'AttendeesController'
        }
      }
    })
    .state('layout.attendee',{
      url : '/attendee/:attendeeId',
      views: {
        'menuContent': {
          templateUrl: 'templates/attendee-detail.html',
          controller: 'AttendeeDetailController'
        }
      }
    })
    .state('layout.comments',{
      url:'/:weddingId/comments',
      views: {
        'menuContent': {
          templateUrl:'templates/comments.html',
          controller: 'CommentsController'
        }
      }
    })
    .state('layout.menu',{
      url:'/:weddingId/menu',
      views: {
        'menuContent': {
          templateUrl:'templates/menu.html',
          controller: 'MenuController'
        }
      }
    })
    .state('layout.map',{
      url:'/:weddingId/map',
      views: {
        'menuContent': {
          templateUrl:'templates/map.html',
          controller: 'MapController'
        }
      }
    });

    $urlRouterProvider.otherwise('/login');

  });
