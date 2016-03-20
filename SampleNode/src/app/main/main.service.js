'use strict';

(function() { angular.module('sampleNode')

.factory('TodoAddResource', function($resource) {
	return $resource('/api/addtodo', null, 
	{
		addTodo: {
			method: 'PUT',
			headers: {
				Accept: 'application/json'
			}
		}
	});
})

.factory('TodoListResource', function($resource) {
	return $resource('/api/getTodos', null, 
			{
			getAllTodos: { //a defined custom action
				method: 'GET',
				isArray: true,
				headers: {
					Accept: 'application/json'
				}
			}
		});
})

.factory('TodoDetailsResource', function($resource) {
	return $resource('/api/getTodoDetails/:id/', null,
		{
		getTodoDetails: {
			method: 'GET',
			params: {
				id: '@id'
			},
			headers: {
					Accept: 'application/json'
			}
		}
	});
})

.factory('TodoUpdateResource', function($resource) {
	return $resource('/api/updateTodo', null, 
	{
		updateTodo: {
			method: 'POST',
			headers: {
				Accept: 'application/json'
			}
		}
	});
});

})();