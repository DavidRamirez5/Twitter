const User = require('../app/models/User')
const UserService = require('./../app/services/UserService')
describe("Test for UserService",() => {
    test("1.- Create a new user using the UserService", () =>{
        //const user = new UserService()
        // Al tener un metodo static en el requerimiento no es necesario instanciar el objeto.
        //id,username,name,bio,
        
        const user= UserService.create(1,'davidramirez','David')
        expect(user.username).toBe("davidramirez")
        expect(user.name).toBe("David")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })
    test("2.- Get all user data in a list", () =>{
        const user= UserService.create(1,'davidramirez','David')
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('davidramirez')
        expect(userInfoInList[2]).toBe('David')
        expect(userInfoInList[3]).toBe('Sin bio')
    })
    test("3.- Update username",() =>{
        const user= UserService.create("davidramirez","David")
        UserService.updateUserUsername(user,"Andres")
        expect(user.username).toBe("Andres")
    })

    test("4.- Given a list of users give me the lis of usernames",()=>{
        const user1= UserService.create(1,'davidramirez1','David')
        const user2= UserService.create(1,'davidramirez2','David')
        const user3= UserService.create(1,'davidramirez3','David')
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("davidramirez1")
        expect(usernames).toContain("davidramirez2")
        expect(usernames).toContain("davidramirez3")
    })
})