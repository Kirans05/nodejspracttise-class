const express = require("express") 
const app = express()


app.get("/",(req,res)=>{
    res.status(200).send("the the server is working fine").end()
})

app.listen(400)