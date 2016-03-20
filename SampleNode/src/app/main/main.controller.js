'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;


  function getAllTodos() {
    TodoListResource.getAllTodos().$promise.then(function onSuccess(successResponse) {
      self.todos = successResponse;
    }, function onError(errorResponse) { 
      console.log(errorResponse);
    });
  };

  self.addTodo = function(todo) {
    TodoAddResource.addTodo(todo).$promise.then(function onSuccess(successResponse){
        console.log(successResponse);
        self.userTodo = '';
        getAllTodos();
    }, function onError(errorResponse){
      console.log(errorResponse);
    });
  };

  self.editTodo = function(todo) {
    self.isEditing = true;
    TodoDetailsResource.getTodoDetails({ id: todo['_id'] }).$promise.then(function onSuccess(successResponse){
      self.userTodo = successResponse;
      getAllTodos();
    }, function onError(errorResponse){
      console.log(errorResponse);
    });
  };

  self.updateTodo = function(todo) {
    TodoUpdateResource.updateTodo(todo).$promise.then(function onSuccess(successResponse){
      self.isEditing = false;
      self.userTodo = '';
      getAllTodos();
    }, function onError(errorResponse){
      console.log(errorResponse);
    });
  };

  self.cancelUpdate = function() {
    self.isEditing = false;
    self.userTodo = '';
    getAllTodos();
  };

  getAllTodos();
});