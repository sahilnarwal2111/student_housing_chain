
async function addData(db,data,model)
{
    let modelObject=new model({...data});
    let doc=await modelObject.save();
    console.log(doc);
    return {...doc};
}
async function getData(db,data,model)
{
    
    let Name=data.Name;
    let result=await model.findOne({Name});
    return result;
}
async function addHostel(db,data,model,id)
{   let temp=id;
    let orgName=data.Name;
    let result=await model.updateOne({Name:orgName},{
        [temp]:data.data
    })
    console.log("id")
    console.log(result);
    return result;
}


module.exports ={addData,addHostel,getData};