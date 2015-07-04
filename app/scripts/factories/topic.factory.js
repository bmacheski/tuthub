'use strict';

angular
	.module('tutHubApp')
	.factory('Topic', Topic)

	function Topic($location, $firebaseArray, FB_URL){
		var ref = new Firebase(FB_URL+ '/topics');
		var topics = $firebaseArray(ref);

		return {
			all: topics,
			create: function (topic){
				topics.$add(topic)
				.then(function (){
					$location.path('/');
				});
			}
		};
	}
