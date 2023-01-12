
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login (){

  const [username, setUsername]= useState("") ;
  const [password, setPassword]= useState("");
  const navigate = useNavigate();


 function login1 (){
    axios
    .post("http://localhost:3600/login", {username, password})
    .then(({data})=>{
      console.log(data)
      if(data.token ){ // is saved we will go directly to login page so we need to import useNavigate react router dom
          localStorage.setItem("token", data.token)
          const aaa = localStorage.getItem("token")
          console.log("local storage bunu kaydettim:" + aaa)
          navigate("/profile")// we need to save token our localStorage
      }else{
          alert(data.message)
      }
    })
 }



    return(
        <div className="Container">
    <div className="row">
      <div className="col-3">
        
      </div>
      <div className="col-6">
      <Form className="loginForm">
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control  placeholder="Please enter username" onChange={(e)=>{setUsername(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Please enter password"  onChange={(e)=>{setPassword(e.target.value)}} />
            </Form.Group>

            <Button variant="primary"  onClick={ ()=>login1()}>
            Login
            </Button>
            
            </Form>
      </div>
      <div className="col-3">
      
      </div>
    </div>
  </div>
    )
}

export default Login;