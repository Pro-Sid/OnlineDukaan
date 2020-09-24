const express = require("express");
const routing = express.Router();
const service = require("../services/user");


routing.post("/login",(req,res,next)=>{
    let username = req.body.username;
    let password = req.body.password;
    service.validateLogin(username, password).then(resp=>{
        if(resp){
            res.status(200);
            res.json({message:"Logged in successfully as : "+ username})
        }
    }).catch(err => {
        next(err)
    })
})

routing.post("/register", (req,res,next)=>{
    let userObj = req.body
    service.registerUser(userObj).then(data=>{
        res.json({message: "User registered successfully!!!"});
    }).catch(err=>{
        next(err)
    })
})

routing.post("/getuser", (req,res,next)=>{
    let emailid = req.body.emailid;
    service.getUser(emailid).then(data=>{
        res.send(data)
    }).catch(err=>{
        next(err)
    })
})

module.exports = routing;