'use strict';

angular
	.module('tutHubApp')
	.controller('TutorialCtrl', function ($routeParams, $location, $firebaseArray, $rootScope, FB_URL){
		var vm = this;
		vm.topicid = $routeParams.topicid;
		vm.tutid = $routeParams.tutid;

		var tutref = new Firebase(FB_URL + '/topics/' + vm.topicid + '/tutorials');
		var tuts = $firebaseArray(tutref);
		vm.tutorials = tuts;

		var bmarkref = new Firebase(FB_URL + '/users/' + $rootScope.auth.github.username + '/bookmarks');
		var bmark = $firebaseArray(bmarkref);

		vm.saveTut = function (){
			tuts.$add(vm.tutorial)
			.then(function (){
				console.log('tutorial added.')
				$location.path('/topics/' + vm.topicid)
			})
		}
		vm.bookmarkTut = function (){
			bmark.$add({title : vm.tutorials[id].title, url : vm.tutorials[id].URL, source : vm.tutorials[id].type})
		}
		vm.go = function (){
			$location.path('/topics/' + vm.topicid + '/new')
		}
	});
