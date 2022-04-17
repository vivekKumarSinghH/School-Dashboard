const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://vivek:1111@cluster0.qzyqr.mongodb.net")
}