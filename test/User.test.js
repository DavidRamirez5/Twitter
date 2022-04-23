const User = require('./../app/models/User')
describe("Unit Test for User class", () =>{
    test("1) Create an User object",() => {
        // Codigo de app
        const user = new User(1,'davidramirez5','David','bio')
        expect(user.id).toBe(1)
        expect(user.username).toBe("davidramirez5")
        expect(user.name).toBe("David")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).not.toBeUndefined() // Verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test("2) Add getter",() => {
        const user = new User(1,"davidramirez5","David","bio")
        expect(user.getUsername).toBe("davidramirez5")
        expect(user.getBio).toBe("bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
})