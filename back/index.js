const express = require("express")

const app = express()

require("dotenv").config()

app.get("/", (req,res)=>{
    res.send({"message":"Backend working"})
})


app.listen(process.env.port,()=>{
    console.log(`Connected to port ${process.env.port}`)
})