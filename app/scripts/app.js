(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
            })

            .state('users', {
            url: '/useradmin',
            controller: 'UserAdminCtrl as users',
            templateUrl: '/templates/useradmin.html'
            })

    }
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();
