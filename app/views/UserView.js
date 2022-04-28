class UserView{
    static createUser(payload){

        if (payload === null) {
            return payload={error:'payload no existe'}
        }else if(typeof payload.username != 'string' && typeof payload.name != 'string' && typeof payload.id != 'number'){
            return  payload={rojo:'necesitan tener un valor válido'}
        }
    }
}


//console.log(UserView.createUser(null))

module.exports= UserView