const Users = require("../Models/user.models");
const {hashPassword,confirmHash} = require("../Utils/hash");
const userSchema = require("../Utils/joi");
const {generateAccessToken,generateRefreshToken}=require("../Utils/sessions");


const register = async(req,res)=>{
    const {firstName,surName,lastName,email,password}=req.body;

    try{

        //Validate user input using joi
        const{error} = userSchema.validate(req.body);
        if(error){
            res.status(400).json({
                success:false,
                error:error.details[0].message
            });
        }

        //Check if email is in use
        const user = await Users.findOne({email});
        if(user){
            return res.status(409).json({
                success:false,
                error:"Account already exists"
            });
        }

        //hash the password
        const hash = await hashPassword(password);


        //create that user object
        await Users.create({
            firstName,
            surName,
            lastName,
            email,
            password:hash,
            role:"User"
        });


        //Return response for successful registration
        return res.status(201).json({
            success:true,
            message:"User registered successfully"
        });
    
    }catch(err){
        return res.status(500).json({
            success:false,
            error:err.message
        })
}
};

const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
        error:"All fields required"
        });
    }
    try{
        //Check if Account exists
        const user = await Users.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                error:"Invalid credentials"
            });
        }
        //if it does compare acc password with the passwords
        const isMatch = await confirmHash(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                error:"Invalid credentials"
            })
        }

        //generating sessions using jwt's
        const accessToken = await generateAccessToken(user);
        const refreshToken= await generateRefreshToken(user);

        //Save your refresh token to the user refreshtoken field
        user.refreshToken =refreshToken;
        user.save();

        //create a cookie for storing refresh Token
        res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:3*24*60*60*1000
        });


        //return a login response
        return res.status(202).json({
            success:true,
            accessToken,
            refreshToken,
            message:"Login successful"
        })


    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}
const getProfile = async(req,res)=>{
    const user = await Users.findById(req.user.id)
    .select("-password -refreshToken");
    if(!user){
        return res.status(404).json({
            success:false,
            error:"User not found"
        });
    }
    return res.status(200).json(user);

};


const newToken = async(req,res)=>{
    const token =req.cookies?.refreshToken;
    if(!token){
        return res.status(401).json({
            success:false,
            error:"invalid token"
        });
    }
    try{
        const decoded = jwt.verify(token,process.env.refreshTokenSecret);
        const user = await Users.findById(decoded.id);
        if(!user){
            return res.status(404).json({
                success:false,
                error:"User not found"
            });
        }
        const newAccessToken = await generateAccessToken(user);
        return res.status(200).json({
            newAccessToken
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err.message
        })
    }

}













module.exports = {register,login,getProfile,newToken};