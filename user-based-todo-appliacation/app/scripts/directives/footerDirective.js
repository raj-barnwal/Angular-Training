angular
    .module('myApp')
    .directive('footerDirective', addFooter);
function addFooter() {
    return {
        restrict: 'A',
        scope: false,
        templateUrl: './scripts/views/footer.html'
    }
}
