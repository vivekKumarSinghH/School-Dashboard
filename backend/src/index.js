
const express = require("express");
const cors=require("cors")
const connect = require("./config/db");
const app = express();
const port=process.env.PORT||8000
app.use(express.json())


const userController=require("./controller/userController")
const classController=require("./controller/classController")

app.use(cors())
app.use("/users",userController)
app.use("/class",classController)

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
