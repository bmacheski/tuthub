'use strict';

angular
	.module('tutHubApp')
	.factory('Topic', function ($http, $location, FB_URL){
		return {
			create (data){
				$http
					.post(FB_URL + '/topics.json', data)
					.success(function (){
						$location.path('/');
					});
			},
			getAll (cb){
				$http
					.get(FB_URL + '/topics.json')
					.success(cb);
			}
		};
	});
