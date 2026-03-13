const express = require("express");
const {register, login, getProfile, newToken, logout} = require("../Controllers/authControllers");
const verifyToken = require("../Middlewares/VerifyToken");
const verifyRoles = require("../Middlewares/VerifyRoles");
const router = express.Router();


router.post('/register',register);
router.post('/login',login);
router.get('/profile',verifyToken,getProfile);
router.delete('/logout',logout);
router.post('/refresh',newToken);
router.get('/admin',verifyToken,verifyRoles("Admin"),(req,res)=>{
    return res.json({message:"Welcome admin"});
});





module.exports = router;