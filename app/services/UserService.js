const User = require('./../models/User')
class UserService{
    static create(id,username,name){
        return new User(id,username,name,'Sin bio')
    }
    static getInfo(obj){
        return [obj.id,obj.username,obj.name,'Sin bio'] // Objetct.values()
    }
    static updateUserUsername(user,newusername){
        return user.username = newusername
        
    }

}

module.exports= UserService