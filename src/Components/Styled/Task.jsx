import { useNavigate } from "react-router"
import styled from "styled-components"


// const Heading=styled.div`
// background-color:${(props)=>props.color};
// width:100%;

// `

const Taskwrapper=styled.div`

width:90%;
border:1px solid black;
background-color:white;
padding:20px;

`





export const Taskdiv=(props)=>{

  const navigate=useNavigate()

  function gotoeditodo()
  {
  
    navigate(`todos/${props.element.id}`)
  
  
  }



    return (
        <Taskwrapper >
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h2>{props.element.title}</h2>
         <button style={{width:"60px",height:"20px"}} onClick={gotoeditodo}>EditTodo</button>
          </div>
   
    
  <div style={{display:"flex",justifyContent:"space-between",padding:"0px 10px"}}>
      <div style={{display:"flex"}}>{props.element.tags.map((e,index)=><div key={index}>{e}</div>)}</div>
      <div>{props.element.date}</div>
  </div>
  <p>{props.element.description}</p>
  <div>
{ props.element.subtask.map((e)=><div><input type="checkbox" /> <label>{e}</label></div>)}  
</div>
    
  </Taskwrapper>
    
    )







}




