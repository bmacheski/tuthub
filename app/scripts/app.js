'use strict';

angular
  .module('tutHubApp', [
    'ngRoute', 'firebase'
  ])
  .constant('FB_URL', 'https://tut-hub.firebaseio.com')
  .config(config)

  function config($routeProvider) {
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
      .when('/topics/:topicid/:tutid/comments', {
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl',
        controllerAs: 'comm'
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
  }
