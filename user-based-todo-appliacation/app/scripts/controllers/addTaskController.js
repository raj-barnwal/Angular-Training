angular
    .module('myApp')
    .controller('addTaskController', addTaskController);

addTaskController.$inject = [];

function addTaskController($localStorage) {
    var vm=this;
    vm.todos = [];

    vm.addTask = function () {
        vm.todos.push({'title': vm.taskTitle, 'description': vm.description, 'duedate': vm.duedate});
        console.log(vm.todos);

        // if($localStorage.todos == null){
        //     var multipleTodos = [];
        //     multipleTodos.push(user);
        //     $localStorage.users = multipleUsers;
        // }else{
        //     var multipleUsers = $localStorage.users;
        //     multipleUsers.push(user);
        //     $localStorage.users = multipleUsers;
        // }
        vm.taskTitle = '';
        vm.description = '';
        vm.duedate = '';
    }
}