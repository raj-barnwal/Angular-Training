angular
    .module('myApp')
    .controller('contactController', [function () {
        var vm = this;
        vm.user = "Raj Barnwal";
        vm.contact = "+91-8527884743";
        vm.email = 'raj.barnwal@tothenew.com'
    }]);