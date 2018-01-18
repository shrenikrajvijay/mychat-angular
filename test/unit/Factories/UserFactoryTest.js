'use strict'

describe("Testing login controller", () => {

  beforeEach(module("mychat"));

  var $UserFactory;

  beforeEach(inject(function(UserFactory){
    $UserFactory = UserFactory;
  }))

  it("should have the userfactory service available", () => {
    expect($UserFactory).toBeDefined();
  })

  it("should have the setUsername function available", () => {
    expect($UserFactory.setUsername).toBeDefined();
  })

  it("should have the getUsername function available", () => {
    expect($UserFactory.getUsername).toBeDefined();
  })

  it("should have the empty username", () => {
    expect($UserFactory.getUsername()).toBe("")
  })

  it("should should set the username after calling setUsername", () => {
    $UserFactory.setUsername("Vijay")
    expect($UserFactory.getUsername()).toBe("Vijay");
  })


});

