angular
    .module('myApp')
    .config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './scripts/views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: './scripts/views/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './scripts/views/contact.html',
                controller:'contactController',
                controllerAs:'vm'
            });

        $stateProvider
            .state('todo',{
                url:'/todo',
                templateUrl:'./scripts/views/todoUser.html'
            })
            .state('todoDetails',{
                url:'/todoDetails/:taskId',
                templateUrl:'/scripts/views/taskDetails.html',
                controller:'todoDetailsController',
                controllerAs:'vp'
            });

        $urlRouterProvider.when('/', '/home');
        $urlRouterProvider.otherwise('/');
    }

]);
