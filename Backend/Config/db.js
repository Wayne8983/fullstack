const mongoose = require("mongoose");

const dbconnect = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL)
        .then(console.log(`Database connected succesfully✅✅`));

    }catch(err){
        console.log(err.message);
    }
}

module.exports= dbconnect;