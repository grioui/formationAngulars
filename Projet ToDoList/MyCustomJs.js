var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoListController', function($scope){
	
	var todoList = $scope;
	todoList.todos = [
	{
		text : 'Learn javascript',

		done : false
	},

			{
	text : 'Learn angular',

				done : false
			}

		];

	todoList.addTodo = function() {

		todoList.todos.push({

			text: todoList.formNewTodo,

			done: false

		});

	
        todoList.formNewTodo = '';
	}
todoList.archive = function() {

    var oldTodos = todoList.todos;

    todoList.todos = [];

    angular.forEach(oldTodos, function(todo) {

      if (!todo.done) {

	
todoList.todos.push(todo);

      }



    });



  };
  
  todoList.remaining = function() {var count = 0;

        angular.forEach(todoList.todos, function(todo) {count += todo.done ? 0 : 1;

        });

        return count;

    };
});