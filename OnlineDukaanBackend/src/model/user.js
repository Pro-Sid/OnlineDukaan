const mongoose = require("mongoose");
const collection = require("../utilities/connection");

var user = {};

//insert a data

user.registerUser = (userObj)=>{
    return collection.getCollection().then(collection=>{
        return collection.create(userObj).then(data=>{
            if(data) return true
            else return false
        })
    })
}

user.updateUserDetails = (emailid, cart)=>{
    return collection.getCollection().then(collection=>{
        return collection.update({emailid: emailid}, {$set:{cart: cart}}).then(data=>{
            if(data) return data
            else return null
        })
    })
}

user.validateLogin = (username, password)=>{
    return collection.getCollection().then(collection=>{
        return collection.find({username: username, password: password}).then(data=>{
            if(data) return true
            else return false
        })
    })
}

user.getUser = (emailid)=>{
    return collection.getCollection().then(collection=>{
        return collection.findOne({emailid: emailid},{}).then(data=>{
            if(data) return data
            else return null
        })
    })
}

module.exports = user;