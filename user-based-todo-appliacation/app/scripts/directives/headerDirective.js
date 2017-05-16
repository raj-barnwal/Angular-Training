angular
    .module('myApp')
    .directive('headerDirective', addHeader);
function addHeader() {
    return {
        restrict: 'A',
        scope: false,
        templateUrl: './scripts/views/header.html'
    }
}
