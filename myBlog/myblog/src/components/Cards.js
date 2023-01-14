import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import "./Cards.css";

function Cards(props){



const[selected,setSelected]= useState(true)
const[index,setIndex]=useState("")


function organize (index){
  setSelected(false);
  setIndex(index)
}

function organize1 (index){
  setSelected(true);
  setIndex(null)
}


  return(

   <div className="main">

    {selected == true ? (props.list.map((e,index)=>{
      return(
        <div className="container-blog">
            <Card key ={index} className="cardBlog" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{e.title}</Card.Title>
         
          <Card.Text  className="textOfBlog" >{e.blogText}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Written by {e.ownerOfBlog}</Card.Subtitle>
          <button  onClick={()=> organize(index)}>Click here to see all text</button>

        </Card.Body>
        </Card>
        </div>
      
      )

    })) :( <Card >
      <Card.Header>Title: {props.list[index].title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}{props.list[index].blogText}
            {' '}
          </p>
          <footer className="blockquote-footer">
            written by  <cite title="Source Title">{props.list[index].ownerOfBlog}</cite>
          </footer>
        </blockquote>
        <button  onClick={()=> organize1(index)}>Click here to see all other blogs of writer</button>
      </Card.Body>
   </Card>)}
 
   </div>

  )
}


export default Cards;

