const User = require('./../models/User')
class UserService{
    static create(id,username,name){
        return new User(id,username,name,'Sin bio')
    }
    static getInfo(obj){
        return [obj.id,obj.username,obj.name,'Sin bio']
    }
}

module.exports= UserService