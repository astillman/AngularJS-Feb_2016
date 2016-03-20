//iife allows you to get a scope that provides local private data
//prevents the pollution of the global namespace
(function() {

	angular.module('template')

	.factory('PeopleResource', function($resource) {

		return $resource('assets/json/sampleData.json', null, 
			{
			getPeople: { //a defined custom action
				method: 'GET',
				isArray: true,
				headers: {
					Accept: 'application/json'
				}
			}
		});
	})

	.factory('FriendsResource', function($resource){
		return $resource('assets/json/:personId/friends.json', {
			personId: '@personId'
		})

	});


})();

