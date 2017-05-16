angular
    .module('myApp')
    .controller('loginController',loginController);

loginController.$inject = [];
// loginController.$inject = ['$scope','ngStorage'];
// function loginController($scope,$localStorage) {


function loginController() {
    var vm=this;
    vm.login = function () {
        var email = vm.email;
        var password = vm.password;
        console.log(email+" "+password);

        vm.isFormSubmit = false;

        if(vm.MyForm.$valid)
        {
            vm.isFormSubmit = false;
        }
        else
        {
            vm.isFormSubmit = true;
        }
        // $localStorage.email = $scope.email;
        // console.log($localStorage);
        if (email==='admin@gmail.com' && password === '12345') {
            alert('Welcome User');
        }
        else {
            alert("oh oh...You are doing wrong.");
        }
    }
}
