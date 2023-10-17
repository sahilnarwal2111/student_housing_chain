
async function addData(db,collection,data,model)
{
    let modelObject=new model(data);
    let doc=await modelObject.save();
    console.log(doc);
}

module.exports ={addData};