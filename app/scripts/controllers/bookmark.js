'use strict';

angular
	.module('tutHubApp')
	.controller('BookmarkCtrl', BookmarkCtrl)

	function BookmarkCtrl($rootScope, $firebaseArray, FB_URL) {
		var vm = this;
		var bmarkref = new Firebase(FB_URL + '/users/' + $rootScope.auth.github.username + '/bookmarks');
		var bmark = $firebaseArray(bmarkref);
		vm.bookmarks = bmark;
	}
