const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  
  grade: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  teacher:{ type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true}
  
 
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("class", productSchema);
