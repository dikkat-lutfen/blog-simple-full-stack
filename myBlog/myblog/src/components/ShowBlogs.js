import axios from "axios";
import { useState,useEffect } from "react";
//import Card from 'react-bootstrap/Card';
import "./ShowBlog.css"
import Cards from "./Cards"
import { useNavigate } from "react-router-dom";

function ShowBlogs (){

    const [list,setList]= useState([]);
    const[user,setUser]=useState("")
    const navigate = useNavigate();


    function goSavePage(){
        navigate("/blogSave")
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            
            axios
            .post("http://localhost:3600/verify", {
        
                token: localStorage.getItem("token")
            })
            .then(({data})=>{
                //console.log(data)
                setUser(data)
                // after getting user I want invoke her/his images whenI open the page so ı wtire the code that are below
                axios.get("http://localhost:3600/blog/" + user._id)
                .then(({data})=>{
                  
                    setList(data.list)
                   
                })
            })
        }
    },[list])


   



    return(
        <div>
         
            <Cards list={list} user={user}/>
            <button onClick={()=>{goSavePage()}}> Save new blog</button>    
        </div>
    )
}

export default ShowBlogs;