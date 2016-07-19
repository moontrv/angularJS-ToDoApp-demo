(function () {
    angular.module("todoListApp")
        .directive("helloWorld", function () {
          return{
            template: "This is the custom directive!"
          }
        });
})();
