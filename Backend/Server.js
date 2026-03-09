require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const dbconnect = require("./Config/db");
const authRoutes = require("./Routes/authRoutes");



//Middlewares
app.use(express.json());
dbconnect();




//routes
app.use('/api/users',authRoutes);




 
app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
})