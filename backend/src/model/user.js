const mongoose=require("mongoose")

var bcrypt = require('bcryptjs');

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,default:"male"},
    role:{type:String,default:"teacher"},
    age:{type:Number,required:true},
    image_url:{type:String,default:"https://cdn.allthings.how/wp-content/uploads/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo-759x427.png?width=1200"},
    password:{type:String,default:111 }
   
},
{
    versionKey:false,
    timestamps:true
})


userSchema.pre("save",function(next){
    if(!this.isModified){
        return next();
    }

    var hash = bcrypt.hashSync(this.password, 8);

this.password=hash
return next()

})

userSchema.methods.checkPassword=function(password){
    
return bcrypt.compareSync(password, this.password); 
}

const User=mongoose.model("user",userSchema)

module.exports=User