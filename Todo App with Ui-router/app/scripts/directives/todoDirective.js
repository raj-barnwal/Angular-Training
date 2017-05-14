angular
    .module('myApp')
    .directive('todoDirective', todoResult);
function todoResult() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: './scripts/views/todoData.html'
    }
}