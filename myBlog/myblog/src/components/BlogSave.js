import "./BlogSave.css"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function BlogSave(){

   const [title,setTitle]= useState("");
   const [blog,setBlog]= useState("");
   const [owner,setOwner]= useState("");
   const [user, setUser]= useState("")

   const navigate = useNavigate();



useEffect (()=>{
    if(localStorage.getItem("token")){
        
        axios
        .post("http://localhost:3600/verify", {
    
            token: localStorage.getItem("token")
        })
        .then(({data})=>{
        setUser(data)
        console.log( data.username )
    }    
        )    
    }else{
        console.log("where is my token and user")
    }
},[])


function save (){
    console.log("user burada :" + user._id + "          " + user.username)
    
    axios.post("http://localhost:3600/blog", {  title:title,  blogText:blog, ownerOfBlog: owner,   
    userId: user._id }).then(({data})=>{
        console.log(data)
    })
}


/* function show(){
    navigate =("/showBlogs")
}
 */

    return(
        <div className="container profileMain">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title of your blog</label>
                        <input onChange = {(e)=>{setTitle(e.target.value)}} type="text" className="form-control" id="exampleFormControlInput1" placeholder="your topic name"/>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your blog below</label>
                        <textarea onChange = {(e)=>{setBlog(e.target.value)}} className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="write your text here"></textarea>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Owners name of blog</label>
                        <input onChange = {(e)=>{setOwner(e.target.value)}} type="text" className="form-control" id="exampleFormControlInput1" placeholder="john someone"/>
                     </div>
                     <div className="d-grid gap-2 col-6 mx-auto">
                        <button onClick={()=>save()}className="btn btn-primary" type="button">to save your blog click here</button>
                        <button onClick={()=> {navigate ("/showBlogs")}} type="button" className="btn btn-outline-success">Show me owner's all blogs</button>
                       
                     </div>
                </div>
                <div className="col=3"></div>
               
            </div>
            
            
        </div>
    )
}

export default BlogSave;