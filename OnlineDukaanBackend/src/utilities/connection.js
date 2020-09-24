const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
// mongoose.set('useCreateIndex', true);

let schema = {
    "username":{
        type: String
    },
    "emailid":{
        type: String
    },
    "password":{
        type: String
    }
}

let userSchema = new Schema(schema, {collection: 'cartUser', timestamps: true});

let connection = {};
connection.getCollection = () =>{
    return mongoose.connect('mongodb://localhost:27017/eCommerceDB', {useNewUrlParser: true}).then(db=>{
        return db.model("cartUser", userSchema);
    }).catch(error=>{
        let err = new Error("Could connect to DB");
        err.status = 500;
        throw err
    })
}

module.exports = connection;