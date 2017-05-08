require('../service/appservice.js');

app.controller('controller', function (todolist) {
    var vm = this;
    todolist.getdata().then(
        function (response) {
            vm.list = {
                dueDate: [],
                crossDate: [],
                completeTask: [],
                inCompleteTask: []
            };

            var MyDate = new Date();
            var taskDate = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-' + MyDate.getFullYear();

            angular.forEach(response.data, function (taskLists) {
                if (taskLists.duedate === taskDate) {
                    vm.list.dueDate.push(taskLists);
                }
                if (taskLists.duedate < taskDate || taskLists.duedate > taskDate) {
                    vm.list.crossDate.push(taskLists);
                }
                if (taskLists.status === "complete") {
                    vm.list.completeTask.push(taskLists);
                }
                if (taskLists.status === "incomplete"){
                    vm.list.inCompleteTask.push(taskLists);
                }

            });

        });
});