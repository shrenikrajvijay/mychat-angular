'use strict'

describe("Chat controller - ", () => {

  var $LoginCtrl;
  var $ChatCtrl;
  var $scope;
  var httpBackend;

  beforeEach(module("mychat"));

  beforeEach(inject(function ($controller, $rootScope) {
    $scope= $rootScope.$new();
    $LoginCtrl = $controller("LoginCtrl", {$scope: $scope});
    $scope.login("Vijay")
    $ChatCtrl = $controller('ChatCtrl', {$scope: $scope});
  }));

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend
    httpBackend.expectGET("/api/rooms").respond(200, [{"name":"Tea Chats","id":0},{"name":"Coffee Chats","id":1}])
  }))

  describe('registerSockets - ', () => {

    it('should be defined', () => {
      expect($scope.registerSockets).toBeDefined()
    })

    it('should call the registerSockets function once', () => {
      spyOn($scope, 'registerSockets')
      $scope.registerSockets();
      expect($scope.registerSockets).toHaveBeenCalled();
    })

  })

  describe('username - ', () => {

    it('should be defined', () => {
      expect($scope.username).toBeDefined()
    })

    it('should be empty initially', () => {
      expect($scope.username).toBe("Vijay")
    })

  })

  describe('tick - ', () => {

    it('should be defined', () => {
      expect($scope.tick).toBeDefined()
    })

    it(' clock should be defined', () => {
      expect($scope.clock).toBeDefined()
    })

    it(' clock should be 0 initially', () => {
      expect($scope.clock).toBe("0")
    })

  })

  describe("shouldClockBeShown - ", () => {

    it('should be defined', () => {
      expect($scope.shouldClockBeShown).toBeDefined()
    })

    it('should return false initially', () => {
      expect($scope.shouldClockBeShown()).toBeFalsy()
    })

  })

  describe("shouldInputMessageBoxBeDisabled - ", () => {

    it('should be defined', () => {
      expect($scope.shouldInputMessageBoxBeDisabled).toBeDefined()
    })

    it('should return true initially', () => {
      expect($scope.shouldInputMessageBoxBeDisabled()).toBeTruthy()
    })

  })

  describe("getRooms - ", () => {

    beforeEach(() => {
      httpBackend.expectGET("views/chat.html").respond(200)
    })

    it('should be defined', () => {
      expect($scope.getRooms).toBeDefined()
    })

    it('calling the function should return rooms', () => {
      httpBackend.flush();
      expect($scope.chatRooms).toBeDefined()
    })

    it('the response should contain the expected data', () => {
      var expectedData = [{"name":"Tea Chats","id":0},{"name":"Coffee Chats","id":1}]
      httpBackend.flush();
      expect($scope.chatRooms).toEqual(expectedData)
    })

  })

  describe("getChatRoom - ", () => {

    beforeEach(() => {

      httpBackend.expectGET("/api/rooms/0").respond(200, {"name": "Tea Chats", "id": 0, "users": ["Ryan", "Nick", "Danielle"]})
      httpBackend.expectGET("/api/rooms/0/messages").respond(200, [{"name": "Ryan", "message": "ayyyyy", "id": "gg35545", "reaction": null}, {"name": "Nick", "message": "lmao", "id": "yy35578", "reaction": null}, {"name": "Danielle", "message": "leggooooo", "id": "hh9843", "reaction": null}])
    })

    it('should be defined', () => {
      expect($scope.getChatRoom).toBeDefined()
    })

    it('calling the function should return messages', () => {

      httpBackend.expectGET("views/chat.html").respond(200)
      var room = {"name": "Tea Chats", "id": 0, "users": ["Ryan", "Nick", "Danielle"]}
      $scope.getChatRoom(room)
      httpBackend.flush();
      expect($scope.selectedRoom.users).toBeDefined()

    })

    it('calling the function should return messages', () => {

      httpBackend.expectGET("views/chat.html").respond(200)
      var room = {"name": "Tea Chats", "id": 0, "users": ["Ryan", "Nick", "Danielle"]}
      var expectedUsers = ["Ryan", "Nick", "Danielle"]
      var expectedMessage = [{"name": "Ryan", "message": "ayyyyy", "id": "gg35545", "reaction": null}, {"name": "Nick", "message": "lmao", "id": "yy35578", "reaction": null}, {"name": "Danielle", "message": "leggooooo", "id": "hh9843", "reaction": null}]
      $scope.getChatRoom(room)
      httpBackend.flush();
      expect($scope.selectedRoom.users).toEqual(expectedUsers)
      expect($scope.messages).toBeDefined();
      expect($scope.messages).toEqual(expectedMessage)
    })

  })

  describe("sendMessage - ", () => {

    it('should be defined', () => {
      expect($scope.sendMessage).toBeDefined()
    })

    it('should post the message', () => {
      httpBackend.expectGET("/api/rooms/0").respond(200, {"name": "Tea Chats", "id": 0, "users": ["Ryan", "Nick", "Danielle"]})
      httpBackend.expectGET("/api/rooms/0/messages").respond(200, [{"name": "Ryan", "message": "ayyyyy", "id": "gg35545", "reaction": null}, {"name": "Nick", "message": "lmao", "id": "yy35578", "reaction": null}, {"name": "Danielle", "message": "leggooooo", "id": "hh9843", "reaction": null}])
      httpBackend.expect('POST', '/api/rooms/0/messages', {"roomId":0,"name":"Vijay","message":"Vijay here.."}).respond(200);
      httpBackend.expectGET("views/chat.html").respond(200)
      var room = {"name": "Tea Chats", "id": 0, "users": ["Ryan", "Nick", "Danielle"]}
      $scope.getChatRoom(room)
      $scope.sendMessage("Vijay here..");
      httpBackend.flush()
    })
  })

})
