const express = require("express");
const app = express();
const port = 3600;
const users = require ("./Modules/Users.js");
const blogs = require ("./Modules/Blogs.js")
const bcrypt = require("bcrypt")
const bodyParser = require ("body-parser")
const cors = require ("cors")
const jwt = require("jsonwebtoken")

app.use(cors({
    origin:"*",
}))

app.use(bodyParser.json())


app.post("/signup", async (req,res)=>{
    console.log(req.body.password)
    if(!req.body.username || !req.body.password){
     res.send({message: "please write data needed both username and password"})
    }else{
      const user = await users.findOne({username: req.body.username})
      if(user){
         res.send({message: "the user already exist"})
      }else{
         bcrypt.hash(req.body.password, 10, async(err, hash)=> {
             if(hash){
                 const newUser = new users ({username:req.body.username, password: hash, userImageUrl:req.body.userImageUrl})
                 await newUser.save()
                 console.log("new user saved database")
                 res.send({message:"new user saved"})
             }else{
                 console.log(err)
                 res.send({message:"error occured"})
             }
         })
    
    } 
   
 }})



app.post("/login", async (req,res)=>{
 
  const user = await users.findOne({username :req.body.username})
  console.log("bu logindeki user :" + user)
  if(user){
    bcrypt.compare( req.body.password, user.password, function (err, result){
        if(result){
            const token = jwt.sign({id:user._id}, "top_secret_key" ,/* exparation date*/)
            res.send (token)
        }else{
            res.send({message:"control your password. you typed wrong password"})
        }
    })

  }else{
    res.send({message: "the user could not find in database please signup and try again and write true username"})
  }
})


app.post("/verify", async (req,res)=>{
    jwt.verify(req.body.token,"top_secret_key", async (err, payload)=>{
        if(payload){
            const user = await users.findOne({_id:payload.id})
            res.send(user)
        }else{
            res.send({message:"your token is expired"})
        }
    })
})

app.post("/blog", async (req,res)=>{
  const newBlog = new blogs({ title:req.body.title, blogText: req.body.blogText, ownerOfBlog:req.body.ownerOfBlog, userId: req.body.userId})
  await newBlog.save();
  res.send({message: "new blog saved to database"})
})

app.get("/blog/:id", async(req,res)=>{
    const allBlogs = blogs.find({userId: req.params.id})
    res.send({list: allBlogs})
})

app.delete("/blog/:id", async (req,res)=>{
    console.log(req.params.id)
    await blogs.findOneAndDelete({_id:req.params.id})
})




app.listen (port, ()=>{
    console.log ("my server works port : " + port)
})