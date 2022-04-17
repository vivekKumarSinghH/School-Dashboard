const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post(
  "",
  async (req, res) => {
    try {
      if(req.body.name){
        const a=await User.findOne({ name:req.body.name})
        if(a){
          return res.status(404).send({admin:a ,message:"This user is Already Registered"})
        }
      }

      if(req.body.role=="admin"){
        const a=await User.findOne({ role:"admin"})
        if(a){
          return res.status(404).send({admin:a ,message:"Admin is Already Registered"})
        }
      }
    
      const user = await User.create(req.body);
      return res.status(201).send({user,message:"User Registered Successfully"});
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);

router.get("/:teacher", async (req, res) => {
  try {
      const a=await User.findOne({ name:req.params.teacher,role:"teacher"}).lean().exec()
      
    

    return res.send( a);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({name:req.body.name,role:"admin"})
    
    if (!user) {
      return res.status(400).send({
          message: "This User is not Registered"
      })
  }
 
    const match=user.checkPassword(req.body.password)
  
    if (!match) {
      return res.status(400).send({
          message: "Please try another name or password"
      })
  }


    return res.send({user,message:"you are logged successfully"});
  } catch (e) {
    return res.status(500).send(e.message);
  }
});


router.get("/:age/:gender", async (req, res) => {

  try {
  
      let s={},q={role:"teacher"}
      if(req.params.age !=0){
        s={age:req.params.age}
      }

    if(req.params.gender!=0 ){
      q={gender:req.params.gender,role:"teacher"}
    }
      const page = req.query.page || 1;
      const size = req.query.size || 4;
      const user = await User.find(q).sort(s)
      .skip((page - 1) * size).limit(size).lean().exec()


      const totalpage = Math.ceil((await User.find(q).countDocuments()) / size)
    

      return res.send({ user,totalpage })
  }
  catch (e) {
      return res.status(500).send(e.message)
  }
})

module.exports = router;
