function shcSchema()
{
    return ({
        Name:String,
        Password:String,
        Contact:String,
        Email:String,
        hostels:Array,
        Address:String,
        notice:Array,
        appeal:Array
    });
}

module.exports ={shcSchema};