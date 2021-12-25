const mongoose = require("mongoose");
const DataTransSchema= new mongoose.Schema({
    txnHash:String,
    From:String,
    To:String,
    Value:String,
    InputData:String,
    InputDataDecode:String 
});
module.exports=mongoose.model("DataTrans",DataTransSchema);