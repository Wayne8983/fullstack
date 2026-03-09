const verifyRoles = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                error:"Forbidden"
            });

        }
        next();
    }
}

module.exports=verifyRoles;