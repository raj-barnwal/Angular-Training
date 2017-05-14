angular
    .module('myApp')
    .controller('addTaskController', addTaskController);

addTaskController.$inject = ['$scope'];

function addTaskController($scope) {
    $scope.todos = [];

    $scope.addTask = function () {
        $scope.todos.push({'title': $scope.taskTitle, 'description': $scope.description, 'duedate': $scope.duedate});
        console.log($scope.todos);
        $scope.taskTitle = '';
        $scope.description = '';
        $scope.duedate = '';
    }
}