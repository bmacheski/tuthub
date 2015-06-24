'use strict';

angular
	.module('tutHubApp')
	.factory('Tutorial', function ($http, $location, FB_URL){
		return {
			getTuts (id, cb){
				$http
					.get(FB_URL + '/topics/' + id + '/tutorials.json')
					.success(cb)
			},
			createTut (id, data, cb){
				$http
					.post(FB_URL + '/topics/' + id + '/tutorials.json')
					.sucess(function () {
						$location.path('#/topics/' + id)
				})
			}
		};
	});
