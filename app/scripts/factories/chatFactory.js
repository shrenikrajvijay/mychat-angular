(function() {
  angular.module('mychat')
  /**
   * @ngdoc service
   * @name mychat.ChatFactory
   * @description Chat Factory.
   */
    .factory('ChatFactory', ChatFactory);

  ChatFactory.$inject = ['$http']

  function ChatFactory($http) {

    /**
     * @ngdoc property
     * @name selectedRoom
     * @propertyOf mychat.ChatFactory
     * @description selectedRoom holds the user selected room.
     */
    var selectedRoom;

    var service =  {
      isRoomSelected: isRoomSelected,
      setSelectedRoom: setSelectedRoom,
      getSelectedRoom: getSelectedRoom,
    }

    return service

    /**
     *  @ngdoc function
     *  @name isRoomSelected
     *  @methodOf mychat.ChatFactory
     *  @description isRoomSelected is used to check if room is selected
     */
    function isRoomSelected() {
      return !!selectedRoom;
    }

    /**
     *  @ngdoc function
     *  @name setSelectedRoom
     *  @methodOf mychat.ChatFactory
     *  @param {Room} room selected room
     *  @description Set selected room.
     */
    function setSelectedRoom(room) {
      selectedRoom = room;
    }

    /**
     *  @ngdoc function
     *  @name getSelectedRoom
     *  @methodOf mychat.ChatFactory
     *  @description Get selected room.
     */
    function getSelectedRoom() {
      return selectedRoom;
    }
  }
})()
