'use strict';

angular
	.module('tutHubApp')
	.controller('TutorialCtrl', TutorialCtrl);

	function TutorialCtrl($routeParams, $location, $firebaseArray, $firebaseObject, $rootScope, FB_URL) {
		var vm = this;
		var ghusername = $rootScope.auth.github.username;
		vm.topicid = $routeParams.topicid;
		vm.tutid = $routeParams.tutid;

		var tutref = new Firebase(FB_URL + '/topics/' + vm.topicid + '/tutorials');
		var tuts = $firebaseArray(tutref);
		vm.tutorials = tuts;

		var bmarkref = new Firebase(FB_URL + '/users/' + ghusername + '/bookmarks');
		var bmark = $firebaseArray(bmarkref);

		var bmarkrefkey = new Firebase(FB_URL + '/users/' + ghusername + '/keys');
		var bmarkobjkey = $firebaseObject(bmarkrefkey);
		vm.bkeys = bmarkobjkey;

		vm.saveTut = function() {
			tuts.$add({
				URL: vm.tutorial.URL,
				title: vm.tutorial.title,
				type: vm.tutorial.type,
				count: 0,
				creator: ghusername
			})
			.then(function (){
				$location.path('/topics/' + vm.topicid);
			});
		};

		vm.bookmarkTut = function(id, tid) {
			Materialize.toast('Added to bookmarks!', 2000);
			bmark.$add({
				title: vm.tutorials[id].title,
				url: vm.tutorials[id].URL,
				source : vm.tutorials[id].type,
				key: tid,
				commentsrc: '#/topics/' + vm.topicid + '/' + tid + '/comments'
			})
			.then(function() {
				bmarkobjkey[tid] = tid;
				bmarkobjkey.$save();
			});
		};

		vm.go = function() {
			$location.path('/topics/' + vm.topicid + '/new');
		};

		vm.incrementVote = function(id) {
			var newtutref = new Firebase(FB_URL + '/topics/' + vm.topicid + '/tutorials/' + id);
			var newref = $firebaseObject(newtutref);
			newref.$loaded()
			.then(function() {
				newref.count++;
				newref.$save();
			});
		};

		vm.decrementVote = function(id) {
			var newtutref = new Firebase(FB_URL + '/topics/' + vm.topicid + '/tutorials/' + id);
			var newref = $firebaseObject(newtutref);
			newref.$loaded()
			.then(function() {
				newref.count--;
				newref.$save();
			});
		};
	}
