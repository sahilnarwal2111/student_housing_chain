
async function addData(db,data,model)
{
    let modelObject=new model({...data});
    let doc=await modelObject.save();
    console.log(doc);
    return {...doc};
}

module.exports ={addData};