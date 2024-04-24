const express = require("express");
const cors=require('cors');
const app = express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const toDatabase=require('./addData');
const schema=require('./schema');

app.use(cors());
app.use(bodyParser.json());
const db="mongodb+srv://admin:admin12345@cluster0.mitzpwb.mongodb.net/shc?retryWrites=true&w=majority&appName=AtlasApp";

const shcModel=new mongoose.model('organization',new mongoose.Schema(schema.shcSchema()))


app.post("/setConnection",(req,res)=>{
    console.log("connection here...");
})
mongoose.connect(db
).then(
    ()=> console.log("Connection successful...")
).catch(
    err => console.log(`Error Occured -> ${err}`)
)

app.post("/getdata",async (req,res) =>{
    
    console.log(req.body)
    console.log("get here Data");
    const onDatabase = await toDatabase.getData(db,req.body,shcModel);
    res.send({...onDatabase});
    
})

app.post("/updateNotice",async (req,res) =>{
    console.log("here")
    console.log(req.body);
    const onDatabase=await toDatabase.addHostel(db,req.body,shcModel,"notice");
    res.send({...onDatabase});
})

app.post("/updatehostel",async (req,res) =>{
    let object=req.body;
    console.log(req.body);
    console.log(req.body.data[0].notice)
    const onDatabase=await toDatabase.addHostel(db,req.body,shcModel,"hostels");


    res.send({...onDatabase});
})

app.get("/getDetails",async (req,res) =>{
    const result=await shcModel.find(); 
    // console.log("here");
    // console.log(result);
    res.send(result); 
})



app.post("/getNewOrg",async (req,res) => {
    //console.log(req.body);
    const onDatabase=await toDatabase.addData(db,req.body,shcModel);
    // console.log("server...");
    // console.log(onDatabase);
    res.send({...onDatabase});
})


app.listen(3010, ()=>{
    console.log("server started on port 3010");
});