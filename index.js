const express = require("express") 
const app = express()
const port = process.env.PORT || 400


app.get("/",(req,res)=>{
    res.status(200).send("heroku server").end()
})

app.listen(port,()=>{
    console.log("port is running at", port)
})