angular.module('app')
    .controller('myController', myController);

myController.$inject = [];

function myController() {
    var vm = this;
    vm.title = "Day 5 AngularJS Assignments";
}


