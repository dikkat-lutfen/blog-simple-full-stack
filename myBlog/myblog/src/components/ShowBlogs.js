import axios from "axios";
import { useState,useEffect } from "react";
//import Card from 'react-bootstrap/Card';
import "./ShowBlog.css"
import Cards from "./Cards"

function ShowBlogs (){

    const [list,setList]= useState([]);
    const[user,setUser]=useState("")
   


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
           {/* 
            {list.map ((e,index)=>{
                return(   <Card list={list} user={user}  )
            })} */}

            <Cards list={list} user={user}/>
                    
        </div>
    )
}

export default ShowBlogs;