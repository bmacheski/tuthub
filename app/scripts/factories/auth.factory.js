'use strict';

angular
	.module('tutHubApp')
	.factory('Auth', function ($firebaseAuth, FB_URL){
		var ref = new Firebase(FB_URL);
		var auth = $firebaseAuth(ref);
		return auth;
	})
