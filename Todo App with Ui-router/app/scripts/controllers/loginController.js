angular
    .module('myApp')
    .controller('loginController', loginController);

loginController.$inject = ['$scope'];
// loginController.$inject = ['$scope','ngStorage'];
// function loginController($scope,$localStorage) {

function loginController($scope) {
    $scope.login = function () {
        var email = $scope.email;
        var password = $scope.password;
        // $localStorage.email = $scope.email;
        // console.log($localStorage);
        if (email === 'admin@gmail.com' && password === '12345') {
            alert('Welcome User');
        }
        else {
            alert("oh oh...You are doing wrong.");
        }
    }
}
