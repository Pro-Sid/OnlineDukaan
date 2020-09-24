const dbLayer = require("../model/user");

let service = {};

service.registerUser = (userObj) =>{
    return dbLayer.registerUser(userObj).then(data=>{
        if(data) return true
        else{
            let err = new Error("User not registered");
            err.status = 401;
            throw err;
        }
    })
}

service.updateUserDetails = (emailid, cart) =>{
    return dbLayer.updateUserDetails(emailid, cart).then(data=>{
        if(data) return data
        else{
            let err = new Error("User Details not updated");
            err.status = 401;
            throw err;
        }
    })
}

service.validateLogin = (username, password) =>{
    return dbLayer.validateLogin(username, password).then(data=>{
        if(data==true) return true
        else{
            let err = new Error("Logging Failed");
            err.status = 401;
            throw err;
        }
    })
}

service.getUser = (emailid)=>{

    return dbLayer.getUser(emailid).then(data=>{
        if(data!=null) return data
        else{
            let err = new Error("User not registered");
            err.status = 401;
            throw err;
        }
    })
}

module.exports = service;