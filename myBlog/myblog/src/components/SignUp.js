
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./signup.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function signup() {


  const [username,setUsername] =useState("")
  const [password,setPassword] =useState("")
  const [userImageUrl,setUserImageUrl] =useState("")
  const navigate = useNavigate();

  const saveIt = ()=>{
/* const saveIt = async()=>{

  try {
     await fetch(`http://localhost:3600/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password,userImageUrl}),
    });
    navigate("/login")
    
    } catch(err) {
   console.log(err)
   alert(err.message)
    } */

  axios.post(`http://localhost:3600/signup`,{username,password,userImageUrl})
  .then(({data})=>{
    if(data.message==="new user saved"){
      navigate("/login")
    }else{
      alert(data.message)
    }
  })

}


  return (
    <div className="Container">
    <div className="row">
     <div className="col-3 control">
        
                
      </div> 
      <div className="col-6">
      <Form className="signupform">


        
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Please enter username"  onChange={(e)=>{ setUsername( e.target.value)}} />
                {console.log(username)}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Please enter password" onChange={(e)=>{setPassword( e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImageUrl">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="Please enter your photo's url " onChange={(e)=>{setUserImageUrl(e.target.value)}} />
            </Form.Group>

            <Button variant="primary"  onClick={()=>{saveIt(); console.log("tıklandı")}}>
            Signup
            </Button>
            <h1 id="signupNote">
              To sign up blog app fill at least username and password
            </h1>
            </Form>
      </div>
      <div className="col-3">
      
      </div>
    </div>
  </div>
  );
}

export default signup;


