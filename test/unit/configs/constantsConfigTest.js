describe("Configs - ", () => {

  var api

  beforeEach(module('mychat'))

  beforeEach(inject(function(API){
    api = API
  }))

  it("should have api defiend", () => {
    expect(api).toBeDefined()
  })

  it("should return API ROOMS", () => {
    var expectedOutput = "/api/rooms"
    expect(api.ROOMS).toBe(expectedOutput)
  })

  it("should return API MESSAGES", () => {
    var expectedOutput = "/messages"
    expect(api.MESSAGES).toBe(expectedOutput)
  })
})