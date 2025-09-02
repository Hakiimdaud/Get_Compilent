
const mongoose = require("mongoose")
const cabashoSchema = mongoose.Schema({
    name:{
    type: String,
    required: true
    },
    email:{
        type:String,
        required: true
    },
    message:{ 
        type : String,    
        required: true
    }

    
},
{timestamps: true}

)

module.exports = mongoose.model("userinfo",cabashoSchema)