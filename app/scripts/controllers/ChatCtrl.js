(function() {
  'use strict';

  angular
    .module('mychat')
    .controller('ChatCtrl', ChatCtrl);

  ChatCtrl.$inject = ['$scope', '$http', 'UserFactory', 'ChatFactory', '$interval', '$anchorScroll', '$filter', '$location', 'API']

  /**
   * @ngdoc controller
   * @name mychat.controller:ChatCtrl
   * @description
   * # Chat Controller.
   *
   * This controller is used to do all the user related actions. It depends on $http, UserFactory, ChatFactory, $interval, $anchorScroll, $filter, $location, API services.
   */
  function ChatCtrl($scope, $http, UserFactory, ChatFactory, $interval, $anchorScroll, $filter, $location, API) {

    UserFactory.setUsername("Vijay");

    $scope.registerSockets = registerSockets;
    $scope.tick = tick;
    $scope.shouldClockBeShown = shouldClockBeShown;
    $scope.shouldInputMessageBoxBeDisabled = shouldInputMessageBoxBeDisabled;
    $scope.getRooms = getRooms;
    $scope.getChatRoom = getChatRoom;
    $scope.sendMessage = sendMessage


    var socket = io("http://localhost:8080");
    $scope.registerSockets();
    /**
     * @ngdoc property
     * @name username
     * @propertyOf mychat.controller:ChatCtrl
     * @description username variable is used to store the name of the user.
     */
    $scope.username = UserFactory.getUsername();

    /**
     *    @ngdoc function
     *  @name registerSockets
     *  @methodOf mychat.controller:ChatCtrl
     *  @description
     *
     *  registerSockets function is used to listen for new messages in the chat room.
     */
    function registerSockets() {
      socket.on('user joined', function () {
        if ($scope.selectedRoom) {
          $http.get(API.ROOMS + "/" + ChatFactory.getSelectedRoom().id).then(function (response) {
            $scope.selectedRoom.users = response.data.users;
          });
        }
      });
      socket.on('messages updated', function () {
        if ($scope.selectedRoom) {
          $http.get(API.ROOMS + "/" + ChatFactory.getSelectedRoom().id + API.MESSAGES).then(function (response) {
            $scope.messages = response.data;
          });
        }
      });
    }

    //if username is not set, send them back to login page
    if (!UserFactory.getUsername()) $location.path("/");

    /**
     * @ngdoc property
     * @name loginTime
     * @propertyOf mychat.controller:ChatCtrl
     * @description The time user logged in.
     */
    var loginTime = Date.now();

    /**
     *    @ngdoc function
     *  @name tick
     *  @methodOf mychat.controller:ChatCtrl
     *  @description
     *
     *  tick function is used to show the time elapsed since the user logged in.
     */
    function tick() {
      $scope.clock = $filter('date')(Date.now() - loginTime, "m");
    }
    $scope.tick();
    $interval($scope.tick, 1000);

    /**
     *    @ngdoc function
     *  @name shouldClockBeShown
     *  @methodOf mychat.controller:ChatCtrl
     *  @description
     *
     *  shouldClockBeShown function is used decide if the clock should be shown. If the time elapsed is less than 60 seconds, then it returns false; otherwise true;
     */
    function shouldClockBeShown() {
      return $scope.clock !== '0';
    };

    /**
     *    @ngdoc function
     *  @name shouldInputMessageBoxBeDisabled
     *  @methodOf mychat.controller:ChatCtrl
     *  @description
     *
     *  shouldInputMessageBoxBeDisabled function is used to enable/disable input text for chats. If no room is selected, then the chat input box is disabled.
     */
    function shouldInputMessageBoxBeDisabled() {
      return typeof $scope.selectedRoom === 'undefined';
    };

    /**
     *    @ngdoc function
     *  @name getRooms
     *  @methodOf mychat.controller:ChatCtrl
     *  @description
     *
     *  getRooms function is used to make an api call to get all the available rooms.
     */
    function getRooms() {
      $http.get(API.ROOMS).then(function (response) {
        $scope.chatRooms = response.data;
        $scope.getChatRoom($scope.chatRooms[0])
      });
    }
    $scope.getRooms();

    /**
     *    @ngdoc function
     *  @name getChatRoom
     *  @methodOf mychat.controller:ChatCtrl
     *    @param {Room} Selected room
     *  @description
     *
     *  getRoom function is used to get all the messages from the selected room.
     */
    function getChatRoom(room) {
      $scope.selectedRoom = room;
      ChatFactory.setSelectedRoom(room);
      $http.get(API.ROOMS + "/" + room.id).then(function (response) {
        $scope.selectedRoom.users = response.data.users;
      });
      $http.get(API.ROOMS + "/" + room.id + API.MESSAGES).then(function (response) {
        $scope.messages = response.data;
      });
    }

    /**
     *    @ngdoc function
     *  @name sendMessage
     *    @param {String} Message to send.
     *  @methodOf mychat.controller:ChatCtrl
     *  @description
     *
     *  sendMessage is used to send messages to the selected room
     */
    function sendMessage(tempMessage) {
      var message = {
        'roomId': ChatFactory.getSelectedRoom().id,
        'name': UserFactory.getUsername(),
        'message': tempMessage
      };
      $http.post(API.ROOMS + "/" + ChatFactory.getSelectedRoom().id + API.MESSAGES, message).then(function (response) {
        //no need to push message, as it gets updated by the socket
        //$scope.messages.push({'name':UserFactory.getUsername(), 'message': message.message, 'id':message.roomId});
      });

      $scope.text = "";
    }
  }
})()