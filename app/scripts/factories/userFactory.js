(function() {
  angular.module('mychat')
  /**
   * @ngdoc service
   * @name mychat.UserFactory
   * @description User Factory.
   */
    .factory('UserFactory', function () {

      /**
       * @ngdoc property
       * @name username
       * @propertyOf mychat.UserFactory
       * @description username of the user.
       */
      var userName = "";

      var service = {
        setUsername: setUsername,
        getUsername: getUsername
      }

      return service;

      /**
       *  @ngdoc function
       *  @name setUsername
       *  @methodOf mychat.UserFactory
       *  @param {String} username name of the user
       *  @description Sets the username
       */
      function setUsername(username) {
        userName = username;
      }

      /**
       *  @ngdoc function
       *  @name getUsername
       *  @methodOf mychat.UserFactory
       *  @description Get username
       */
      function getUsername() {
        return userName;
      }
    });
})()