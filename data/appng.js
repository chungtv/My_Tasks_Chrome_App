function TodoCtrl($scope) {
   
  $scope.addTodo = function() {
    $scope.todos.unshift({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
  
  chrome.storage.sync.get('todolist', function(value) {
    $scope.$apply(function() {$scope.load(value);});
  });

  
  $scope.save = function() {
    chrome.storage.sync.set({'todolist': $scope.todos});
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
	chrome.storage.sync.set({'todolist': $scope.todos});
  };
  
  $scope.load = function(value) {
  if (value && value.todolist) {
    $scope.todos = value.todolist;
  } else {
    $scope.todos = [{text:'Send feedback at arpit@techraga.com', done:false}];
    }
  }
}