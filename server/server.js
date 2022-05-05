const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require("./config/config")
dotenv.config() ;

// database connect
DbConnection();

const app = express();
// middleware
app.use(express.json());

// route

app.get("/", (req,res) =>{
    res.send("done");
})

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`working ${process.env.PORT}`);
})