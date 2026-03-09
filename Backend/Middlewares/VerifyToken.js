const jwt = require("jsonwebtoken")
const verifyToken = async(req,res,next)=>{
    //req for the token from the headers 
    const bearer = req.headers?.authorization || req.headers?.Authorization ;
    if(!bearer){
        return res.status(403).json({
            success:false,
            error:"no token provided"
        });
    }
    try{
        //get token from the bearer string
        const token = bearer.split(" ")[1];
        if(!token){
            return res.sendStatus(403);
        }

        const decoded = await jwt.verify(token,process.env.accessTokenSecret);
        req.user=decoded;
        next();


    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}

module.exports=verifyToken;