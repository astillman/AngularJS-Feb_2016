(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(PeopleResource, FriendsResource) {
    var self = this;

//promise method
    PeopleResource.getPeople({
    	page: 2,
    	searchVal: "george aosdfj asdflk"
    }).$promise.then(function onSuccess(successResponse) { 
    	//$promise is a property of the called request
    	self.people = successResponse;
    }, function onError(errorResponse) {
    	console.log(errorResponse);
    });

    self.viewFriends = function(person) {
    	FriendsResource.query({
    		personId: person._id
    	}).$promise.then(function onSuccess(friendsResponse) {
    		person.friends = friendsResponse;
    	}, function onError(errorResponse) {
    		console.log(errorResponse);
    	});
    }

//future method - difficult for chaining -- results in lots of nested callbacks
   // PeopleResource.getPeople({
   //  	page: 2,
   //  	searchVal: "george aosdfj asdflk"
   //  }, function onSuccess(successResponse) { 
   //  	//$promise is a property of the called request
   //  	self.people = successResponse;
   //  }, function onError(errorResponse) {
   //  	console.log(errorResponse);
   //  });

    self.greeting = "Hello world";
  }
})();
