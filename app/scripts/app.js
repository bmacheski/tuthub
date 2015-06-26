'use strict';

angular
  .module('tutHubApp', [
    'ngRoute'
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
      .when('/topics/:id', {
        templateUrl: 'views/tutorials.html',
        controller: 'TutorialCtrl',
        controllerAs: 'main'
      })
      .when('/topics/:id/new', {
        templateUrl: 'views/newtutorial.html',
        controller: 'TutorialCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FB_URL', 'https://tut-hub.firebaseio.com')
  .filter('objectToArr', function (){
    return function (obj){
      if (obj){
        return Object
          .keys(obj)
          .map(function (key){
            obj[key]._id = key;
            return obj[key];
          });
      }
    };
  });
