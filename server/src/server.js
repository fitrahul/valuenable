const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use("/user",userController);

app.listen(4000,async ()=>{
    await connect();
    console.log("Listening to port 4000");
})