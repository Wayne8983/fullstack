const bcrypt = require("bcrypt");

const hashPassword = async(p)=>{
    return bcrypt.hash(p,10);
};
const confirmHash = async(p,h)=>{
    return bcrypt.compare(p,h);
}



module.exports ={hashPassword,confirmHash};