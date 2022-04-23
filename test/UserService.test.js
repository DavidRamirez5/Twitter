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
})