
const express = require("express")
const cabashoModel =require("./model")
const cors = require("cors")
const mongoose = require("mongoose")

 const app = express()
 app.use(express.json())
 app.use(cors())

mongoose.connect("mongodb://localhost:27017/cabashadada_sheego")

app.post("/create/userinfo",async(req,res)=>{
    const newData = cabashoModel(req.body)
    const saveData = await newData.save()
    if (saveData) {
        res.send(saveData)
        
    }
})

app.get("/read/userinfo" ,async(req,res)=>{
    const getData =await cabashoModel.find()
    if (getData) {
        res.send(getData)
    }
})

app.delete("/delete/userinfo/:id", async(req,res)=>{
    const removeData = await cabashoModel.deleteOne({_id: req.params.id})
    if (removeData) {
        res.send("sucess dalete")
        
    }
})




app.listen(9000,()=> console.log("Server is running"))