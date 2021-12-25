var DataTrans=require("../models/DataTrans");
module.exports=function(app){
app.get("/", function (req, res) {
  res.send("Ok");
  //  res.render("layout");
});

app.post("/SaveILV",function(req,res){
        var dataSave = new DataTrans({
            txnHash:req.body.txnHash,
            From:req.body.From,
            To:req.body.To,
            Value:req.body.Value,
            InputData:req.body.InputData,
            InputDataDecode:req.body.InputDataDecode
            });
            dataSave.save(function(err){
                if(err){
                    res.json({Result:0,Err:"mongodb save error!"});
                } else {
                    res.json({Result:dataSave});
                }
            })      
})

}
