
async function addData(db,data,model)
{
    let modelObject=new model({...data});
    let doc=await modelObject.save();
    console.log(doc);
    return {...doc};
}

async function addHostel(db,data,model)
{
    let orgName=data.Name;
    let result=await model.updateOne({Name:orgName},{
        hostels:data.data
    })
    console.log(result);
    return result;
}


module.exports ={addData,addHostel};