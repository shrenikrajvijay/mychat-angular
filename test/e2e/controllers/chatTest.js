describe('chat page - ', () => {
    beforeEach(() => {
        browser.get('http://localhost:8081');
        element(by.model('username')).sendKeys("Vijay");
        element(by.buttonText("Join the mychat Chat!")).click()
    })

    it('location should be /chat', () => {
        expect(browser.getCurrentUrl()).toEqual("http://localhost:8081/#!/chat")
    })

    describe("left header - ", () => {

        it('should have the username div', () => {
            expect(element(by.css(".username")).isPresent()).toBeTruthy()
        })

        it('should have the username set to Vijay', () => {
            expect(element(by.css(".username")).getText()).toBe('Vijay')
        })

        it('should hide the clock initially', () => {
            expect(element(by.css("[ng-if='shouldClockBeShown()']")).isPresent()).toBeFalsy()
        })

    })

    describe("left body - ", () => {

        it('should have two chat rooms', () => {
            expect(element.all(by.repeater('x in chatRooms')).count()).toBe(2)
        })

        it("should have no rooms selected initially", () => {
            expect(element(by.css(".selectedList")).isPresent()).toBeFalsy()
        })

        it("should have the room names right", () => {
            var rooms = element.all(by.repeater('x in chatRooms'))
            expect(rooms.get(0).getText()).toBe("Tea Chats")
            expect(rooms.get(1).getText()).toBe("Coffee Chats")
        })

        it("clicking on Tea chat should have Tea chat room selected", () => {
            element.all(by.repeater("x in chatRooms")).get(0).click()
            expect(element(by.css(".selectedList")).isPresent()).toBeTruthy()
        })
    })

    describe("right header - ", () => {

        it('should have no users until the room is selected', () => {
            expect(element.all(by.repeater('user in selectedRoom.users')).count()).toBe(0)
        })

        it('should have some users after the room is selected', () => {
            element.all(by.repeater('x in chatRooms')).get(0).click()
            expect(element.all(by.repeater('user in selectedRoom.users')).count()).toBeGreaterThan(0)
        })

    })

    describe("right body - ", () => {

        it('should have no messages until the room is selected', () => {
            expect(element.all(by.repeater('m in messages')).count()).toBe(0)
        })

        it('should have some messages after the room is selected', () => {
            element.all(by.repeater('x in chatRooms')).get(0).click()
            expect(element.all(by.repeater('message in messages')).count()).toBeGreaterThan(0)
        })

    })

    describe("right footer - ", () => {

        it('should have the input box disabled initially', () => {
            expect(element(by.model("text")).isEnabled()).toBeFalsy()
        })

        it('should have the send button disabled initially', () => {
            expect(element(by.buttonText("Send")).isEnabled()).toBeFalsy()
        })

        it('should have the input box disabled initially', () => {
            element.all(by.repeater('x in chatRooms')).get(0).click()
            expect(element(by.model("text")).isEnabled()).toBeTruthy()
        })

        it('should have the send button disabled initially', () => {
            element.all(by.repeater('x in chatRooms')).get(0).click()
            expect(element(by.buttonText("Send")).isEnabled()).toBeTruthy()
        })

        it("should send the message and display in the message section", () => {
            element.all(by.repeater('x in chatRooms')).get(0).click()
            var messageCount = element.all(by.repeater("message in messages")).count()
            element(by.model("text")).sendKeys("Hello all..");
            element(by.buttonText("Send")).click();
            var newMessageCount = element.all(by.repeater("message in messages")).count()
            expect(newMessageCount).toBe(messageCount)
            expect(element.all(by.repeater("message in messages")).last().getText()).toBe("HELLO ALL..")
        })

    })

})

