const User = require('./../app/models/User')
describe("Unit Test for User class", () =>{
    test("1) Create an User object",() => {
        // Codigo de app
        const user = new User(1,'davidramirez5','David','bio','dateCreated','lastUpdated')
        expect(user.id).toBe(1)
        expect(user.username).toBe("davidramirez5")
        expect(user.name).toBe("David")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    })
})