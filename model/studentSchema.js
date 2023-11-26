const mongoose=require("mongoose");
const studentSchema =new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "rollNo":{type:Number}

},{
    collection:"student"
})
module.exports=mongoose.model("studentSchema",studentSchema);