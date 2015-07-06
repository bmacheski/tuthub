'use strict';

angular
	.module('tutHubApp')
	.controller('BookmarkCtrl', BookmarkCtrl);

	function BookmarkCtrl($rootScope, $firebaseArray, $firebaseObject, FB_URL) {
		var vm = this;
		var ghusername = $rootScope.auth.github.username;
		var bmarkref = new Firebase(FB_URL + '/users/' + $rootScope.auth.github.username + '/bookmarks');
		var bmark = $firebaseArray(bmarkref);
		vm.bookmarks = bmark;

		var bmarkrefkey = new Firebase(FB_URL + '/users/' + ghusername + '/keys');
		var bmarkobjkey = $firebaseObject(bmarkrefkey);
		vm.bmarkkeys = bmarkobjkey;

		vm.removeBookmark = function(id, bkey) {
			bmark.$remove(id);
			bmarkobjkey.$remove(bkey);
			bmarkobjkey.$save();
			bmark.$remove(id)
			.then(function() {
				console.log('bookmark removed.');
			});
		};
	}
