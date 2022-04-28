const UserService = require("../services/UserService")

UserService
class UserView{
    static createUser(payload){

        if (payload === null) {
            return payload={error:'payload no existe'}
        }else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number'){
            return  UserService.create(payload.id,payload.username,payload.name)
        }else{
            return  payload={error:'necesitan tener un valor válido'}
        }
    }
}


//console.log(UserView.createUser(null))

module.exports= UserView