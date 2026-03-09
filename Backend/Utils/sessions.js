const jwt = require("jsonwebtoken");

const generateAccessToken = async(user)=>{
    return jwt.sign(
        {id:user._id,role:user.role,email:user.email},
        process.env.accessTokenSecret,
        {expiresIn:"10m"}
    )
};

const generateRefreshToken = async(user)=>{
    return jwt.sign(
        {id:user._id,role:user.role,email:user.email},
        process.env.refreshTokenSecret,
        {expiresIn:"3d"}
    )
};

module.exports ={generateAccessToken,generateRefreshToken};