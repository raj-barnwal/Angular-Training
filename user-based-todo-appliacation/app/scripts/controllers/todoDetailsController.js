angular
    .module('myApp')
    .controller('todoDetailsController', todoDetailsController);

todoDetailsController.$inject = ['$stateParams', 'todolist'];

function todoDetailsController($stateParams, todolist) {
    var vp = this;
    todolist.getdata().then(
        function (response) {
            vp.list = response.data[$stateParams.taskId - 1];
            return vp.list;
        });
}
