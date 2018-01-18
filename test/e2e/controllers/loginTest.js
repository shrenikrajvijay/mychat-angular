describe('login page - ', () => {
  beforeEach(() => {
      browser.get('http://localhost:8081');
  })

  it('location should be /', () => {
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8081/#!/")
  })

  it('should have an input field for typing username', () => {
    expect(element(by.model("username")).isPresent()).toBe(true)
  })

  it('should have an input field for typing username', () => {
    expect(element(by.buttonText("Join the mychat Chat!")).isPresent()).toBe(true);
  })
})

