import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import "./Cards.css";
import axios from "axios";

function Cards(props){



const[selected,setSelected]= useState(true)
const[index,setIndex]=useState("")
/* const[title2,setTitle2]=useState("")
const[blogText2,setBlogText2]=useState("")
const[ownerOfBlog2,setOwnerOfBlog2]=useState("") */
const[user,setUser]=useState("")

function organize (index){
  setSelected(false);
  setIndex(index)
}

function organize1 (index){
  setSelected(true);
  setIndex(null)
}

function deleteBlog (id){
  axios.delete("http://localhost:3600/blog/"+id).then(({data})=>{
    console.log(data)
    alert("blog deleted")
  })

}


/* useEffect(()=>{
  if(localStorage.getItem("token")){
      
      axios
      .post("http://localhost:3600/verify", {
  
          token: localStorage.getItem("token")
      })
      .then(({data})=>{
          //console.log(data)
          setUser(data)
          // after getting user I want invoke her/his images whenI open the page so ı wtire the code that are below
    
      })
  }
},[]) */



function editBlog (id){


  const innerBlogText2 = JSON.stringify(document.getElementsByClassName("textOfBlog")[0].innerHTML);
   const innerTitle2 = JSON.stringify(document.getElementsByClassName("title")[0].innerHTML);
      const innerOwnerOfBlog2 =JSON.stringify(document.getElementsByClassName("owner")[0].innerHTML);
   
   
   console.log ("sssetTitle2 :" + innerTitle2)
   console.log ("sssetTitle2 :" + innerBlogText2)
   console.log ("sssetTitle2 :" + innerOwnerOfBlog2)
  /*  setTitle2(innerTitle2)
   setBlogText2(innerBlogText2)
   setOwnerOfBlog2(innerOwnerOfBlog2)
 */


  axios.put("http://localhost:3600/blog/"+id, {  title:innerTitle2,  blogText:innerBlogText2, ownerOfBlog: innerOwnerOfBlog2,   
  userId: user._id }).then(({data})=>{
    console.log(data)
    alert("Blog id edited")
  }) 
}

  return(

   <div className="main">

    {selected == true ? (props.list.map((e,index)=>{
      return(
        <div className="container-blog" key={index}>
            <Card key ={index} className="cardBlog" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title  >{e.title}</Card.Title>
         
          <Card.Text   >{e.blogText}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted ">Written by {e.ownerOfBlog}</Card.Subtitle>
          <button  onClick={()=> organize(index)}>Click here to see all text</button>

        </Card.Body>
        </Card>
        </div>
      
      )

    })) :( <Card >
      <Card.Header  className='title'  contentEditable="true"  suppressContentEditableWarning={true}> {props.list[index].title}</Card.Header>
      <Card.Body     contentEditable="true"  suppressContentEditableWarning={true}>
        <blockquote className="blockquote mb-0">
          <p  className="textOfBlog"  >
            {props.list[index].blogText}
            
          </p>
          <Card.Body className="blockquote-footer  owner" title="Source Title" contentEditable="true"  suppressContentEditableWarning={true}>{props.list[index].ownerOfBlog}
          </Card.Body>
        </blockquote>
        <button onClick={()=>{deleteBlog(props.list[index]._id)}}> Delete this blog</button>
        <button  onClick={()=> organize1()}>Click here to see all other blogs</button>
        <button onClick={()=>{editBlog(props.list[index]._id)}}> Edit blog</button>
      </Card.Body>
   </Card>)}
 
   </div>

  )
}


export default Cards;

