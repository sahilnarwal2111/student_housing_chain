const mongoose=require('mongoose');

function addData(db,collection,data)
{
    console.log("in addData");
    console.log(collection);
    console.log(data);
}

module.exports ={addData};