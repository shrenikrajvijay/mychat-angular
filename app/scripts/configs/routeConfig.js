(function() {
    'use strict';
    /**
     * @ngdoc overview
     * @name mychat
     * @description
     * # mychat
     *
     * mychat app is a cool chat application. Just enter your name and start chatting. It depends on ngRoute module.
     **/
    angular
      .module('mychat', [
          'ngRoute',
      ])
      .config(routeProvider)

    routeProvider.$inject = ['$routeProvider']

    function routeProvider($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/chat', {
                templateUrl: 'views/chat.html',
                controller: 'ChatCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    };
})()