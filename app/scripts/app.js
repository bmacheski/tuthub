'use strict';

angular
  .module('tutHubApp', [
    'ngRoute', 'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: '',
        controllerAs: ''
      })
      .when('/topics/new', {
        templateUrl: 'views/newtopic.html',
        controller: 'TopicsCtrl',
        controllerAs: 'main'
      })
      .when('/topics/:topicid', {
        templateUrl: 'views/tutorials.html',
        controller: 'TutorialCtrl',
        controllerAs: 'main'
      })
      .when('/topics/:topicid/new', {
        templateUrl: 'views/newtutorial.html',
        controller: 'TutorialCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarkCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FB_URL', 'https://tut-hub.firebaseio.com')

