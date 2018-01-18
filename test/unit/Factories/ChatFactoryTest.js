'use strict'

describe("Testing chat controller", () => {

  beforeEach(module("mychat"));

  var $ChatFactory;

  beforeEach(inject(function(ChatFactory){
    $ChatFactory = ChatFactory;
  }))

  it("should have the chatFactory service available", () => {
    expect($ChatFactory).toBeDefined();
  })

  it("should have the isRoomSelected function available", () => {
    expect($ChatFactory.isRoomSelected).toBeDefined();
  })

  it("should have the setSelectedRoom function available", () => {
    expect($ChatFactory.setSelectedRoom).toBeDefined();
  })

  it("should have the getSelectedRoom function available", () => {
    expect($ChatFactory.getSelectedRoom).toBeDefined();
  })

  it("should not have selected room before calling setSelectedRoom", () => {
    expect($ChatFactory.isRoomSelected()).toBe(false)
  })

  it("should should set the setSelectedRoom after calling setUsername", () => {
  expect($ChatFactory.getSelectedRoom()).toBe(undefined)
})

  it("should should set the setSelectedRoom after calling setUsername", () => {
    $ChatFactory.setSelectedRoom(1)
    expect($ChatFactory.getSelectedRoom()).toBeDefined()
  })


});

