require('../services/getService.js');
angular
    .module('myApp')
    .controller('todoListController', todoListController);

todoListController.$inject = ['todolist'];

function todoListController(todolist) {
    var vm = this;
    todolist.getdata().then(
        function (response) {
            console.log(vm.todolist);
            vm.list = {
                completeTask: [],
                inCompleteTask: []
            };

            angular.forEach(response.data, function (taskLists) {
                if (taskLists.status === "complete") {
                    vm.list.completeTask.push(taskLists);
                }
                else {
                    vm.list.inCompleteTask.push(taskLists);
                }
            });
        });
}