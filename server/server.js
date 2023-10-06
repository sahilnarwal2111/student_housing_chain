const express = require("express");
const cors=require('cors');
const app = express();
const mongoose=require('mongoose');
app.use(cors());

const db="mongodb+srv://admin:admin12345@cluster0.mitzpwb.mongodb.net/shc?retryWrites=true&w=majority&appName=AtlasApp";
mongoose.connect(db
).then(
    ()=> console.log("Connection successful...")
).catch(
    err => console.log(`Error Occured -> ${err}`)
)
app.post("/api",(req,res) =>{
    res.json({"users":["world","student","three"]})
});


app.listen(5000, ()=>{
    console.log("server started on port 5000");
});