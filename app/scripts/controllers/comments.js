'use strict';

angular
	.module('tutHubApp')
	.controller('CommentsCtrl', CommentsCtrl);

	function CommentsCtrl($rootScope, $routeParams, $firebaseArray, $firebaseObject, FB_URL) {
		var vm = this;
		vm.topicid = $routeParams.topicid;
		vm.tutid = $routeParams.tutid;

		var cref = new Firebase(FB_URL + '/topics/' + vm.topicid + '/tutorials/' + vm.tutid);
		var commentObj = $firebaseObject(cref);
		vm.commentView = commentObj;

		var ref = new Firebase(FB_URL + '/topics/' + vm.topicid + '/tutorials/' + vm.tutid + '/comments');
		var comments = $firebaseArray(ref);
		vm.comments = comments;

		vm.addComment = function() {
			comments.$add({
				message : vm.comment,
				commentername : $rootScope.auth.github.username,
				commenterAv : $rootScope.auth.github.cachedUserProfile.avatar_url
			})
			.then(function() {
				vm.comment = '';
			});
		};
		vm.removeComment = function(id) {
			comments.$remove(id);
		};
	}
