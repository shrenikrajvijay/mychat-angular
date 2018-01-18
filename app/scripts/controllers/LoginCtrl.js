(function() {
  'use strict';

  angular
    .module('mychat')
    .controller('LoginCtrl', loginCtrl);

  loginCtrl.$inject = [ '$scope', '$location', 'UserFactory' ]

  /**
   * @ngdoc controller
   * @name mychat.controller:loginCtrl
   * @description
   * # Login Controller.
   * This controller is used to get the name of the application user. It depends on $location and UserFactory service.
   */
  function loginCtrl($scope, $location, UserFactory) {
    /**
     *  @ngdoc function
     *  @name login
     *  @methodOf mychat.controller:loginCtrl
     *  @param {String} name Name of the user.
     *  @description Login function is used to log in the user once the username is provided.
     */
    $scope.login = function(username){
      UserFactory.setUsername(username);
      $location.path("chat");
    }
  }
})()