const { required } = require("joi");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        enum:["Admin","User"],
        default:"User",
        type:String
        
    },
    refreshToken:{
        type:String
        
    }
},
{
    timestamps:{
        createdAt:true,
        updatedAt:false
    }
});


module.exports = mongoose.model("Users",userSchema);