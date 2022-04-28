const UserView = require('./../app/views/UserView')

describe("Test for UserView",() =>{
    test("1. Return an error object wheh try to create a new user with a null payload",() =>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
    test("2. Return an error object when try to create a new user with a playload witch invalid properties",() =>{
        const payload = {username: null, name:12,id: 'id'}
        const result = UserView.createUser(payload)
        expect(result.rojo).toMatch(/necesitan tener un valor válido/)
    })
})

