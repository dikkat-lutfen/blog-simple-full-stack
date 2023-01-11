const express = require ("express");

const app = express;
const port = 3600;

const bodyParser = require ("body-parser")

app.use(bodyParser.json())


app.post("login",(req,res)=>{
    res.send({message: "server signup works"})
})





app.listen (port, ()=>{
    console.log ("my server works port : " + port)
})