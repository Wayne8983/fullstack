require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const dbconnect = require("./Config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/authRoutes");
const cors = require("cors");



//Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
dbconnect();




//routes
app.use('/api/users',authRoutes);




 
app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
})