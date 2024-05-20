const express = require("express");
const sum = require("./math.js")
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000

app.use("/", (req, res)=>{
    res.send("hy Vishal");
})

console.log(sum(22,33))

app.listen(port, console.log(`its working on : ${port}`))