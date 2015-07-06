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

		vm.removeBookmark = function(id, bkey) {
		var bmarkrefkey = new Firebase(FB_URL + '/users/' + ghusername + '/keys/' + bkey);
		var bmarkobjkey = $firebaseObject(bmarkrefkey);
		bmarkobjkey.$loaded()
			.then(function() {
				bmark.$remove(id);
				bmarkobjkey.$remove(bkey);
				bmarkobjkey.$save();
				bmark.$remove(id)
			});
		}
	}
