'use strict'

describe("Login controller - ", () => {

  var $LoginCtrl;
  var $scope;

  beforeEach(module("mychat"));

  beforeEach(inject(function($controller, $rootScope){
    $scope = $rootScope.$new();
    $LoginCtrl = $controller("LoginCtrl", {$scope : $scope});
  }))

  it("should define the login function", () => {
    expect($scope.login).toBeDefined();
  })

  it("should redirect to chat page once the name is entered and chat button is pushed", inject(($location) => {
    $scope.login("Vijay");
    expect($location.path()).toBe("/chat");
  }))

});
