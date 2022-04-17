const express = require("express");
const router = express.Router();
const Class=require("../model/class")
router.post(
  "",
  async (req, res) => {
    try {
    

    const product = await Class.create(req.body);
    
    return res.status(201).send(product);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);

router.get("/:teacg", async (req, res) => {
  try {
    let q={teacher:req.params.teacher}
    if(req.params.teacher ==="all"){
    q={}}
 
    const product = await Class.find(q)
       .lean()
      .exec();

 
    return res.send( product);
  } catch (e) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
