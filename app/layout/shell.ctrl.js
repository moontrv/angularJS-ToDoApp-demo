(function () {
    angular.module("todoListApp")
        .controller("mainCtrl", function ($scope, dataService) {
          $scope.helloConsole = dataService.helloConsole;

          /*
          $scope.trackChange = function(){
            console.log("An input changed");
          }
          */

          $scope.addTodo= function(){
            var todo = {name:"This is a new todo."};
            $scope.todos.push(todo);
          };

          dataService.getTodos(function(response){
              console.log(response.data);
              $scope.todos = response.data;
          });

          $scope.deleteTodo = function(todo, $index){
            dataService.deleteTodo(todo);
            $scope.todos.splice($index, 1);
          }

          $scope.saveTodo = function(todo, $index){
            dataService.saveTodo(todo);

          }
        })
        .service("dataService", function($http){
          this.helloConsole = function(){
            console.log("This is the hellow console service");
          };

          this.getTodos = function(callback){
            $http.get('app/data/todos.json')
            .then(callback);
          };

          this.deleteTodo = function(todo){
            console.log("The" + todo.name + "has been deleted!");
          };

          this.saveTodo = function(todo){
            console.log("The" + todo.name + "has been saved!");
          }
        });

})();
