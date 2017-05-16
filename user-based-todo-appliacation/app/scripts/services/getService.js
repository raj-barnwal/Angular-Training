angular
    .module('myApp')
    .factory('todolist', gettodolist);

gettodolist.$inject = ['$http'];

function gettodolist($http) {
    var factory = {};
    factory.getdata = getdata;
    return factory;
    function getdata() {
        return ($http.get('api/data.json')
                .then(function (response) {
                    return response;
                })
                .catch(function (err) {
                    console.log(err);
                })

        )
    }
}




