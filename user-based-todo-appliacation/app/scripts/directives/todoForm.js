angular
    .module('myApp')
    .directive('todoForm',addTodoLayout);
function addTodoLayout() {
    return {
        restrict:'E',
        templateUrl:'./scripts/views/todoUser.html'
    }
}