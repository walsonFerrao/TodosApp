import { useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {add_to_database} from '../Redux/todo/action'



const Title=styled.input`

width:100%;
height:30px;

`
const Description=styled.textarea`

width:100%;
height:70px;
`
const Container=styled.div`

background-color:silver;
width:80%;
margin:auto;
padding-top:30px;
padding-bottom:30px;

`

const initialstate={
title:"",
description:"",
subtask:[],
todo_state:"todo",
tags:[],
date:""


}

const Subtaskdiv=(props)=>
{

 

return(

<div style={{display:"flex",gap:"25px",justifyContent:"space-between",marginTop:"5px"}}>

<div>{props.elem} </div>
<button onClick={()=>{props.dispatch(delete_subtask(props.index))}}>delete</button>

</div>


)



}




const reducer=(state,{type,payload})=>
{

switch(type){

case ADD_TITTLE:
    return {...state,title:payload};

    case ADD_DESCRIPTION:
        return {...state,description:payload};

        case ADD_TODO_STATE:
            return {...state,todo_state:payload}

               case ADD_TAGS:
                   return {...state,tags:[...state.tags,payload]}

                   case ADD_SUBTASK:
                       return {...state,subtask:[...state.subtask,payload]}

                       case DELETE_SUBTASK:
                           return {...state,subtask:state.subtask.filter((elem,index)=>(index!==payload))}

                           case ADD_DATE:
                               return {...state,date:payload}
default:
    throw new Error();




}

}

const ADD_TITTLE="ADD_TITTLE"
const add_title=(payload)=>({type:ADD_TITTLE,payload})

const ADD_DESCRIPTION="ADD_DESCRIPTION"
const add_description=(payload)=>({type:ADD_DESCRIPTION,payload})

const ADD_TODO_STATE="ADD_TODO_STATE"
const add_todo_state=(payload)=>({type:ADD_TODO_STATE,payload})

const ADD_TAGS="ADD_TAGS"
const add_tags=(payload)=>({type:ADD_TAGS,payload})

const ADD_SUBTASK="ADD_SUBTASK"
const add_subtask=(payload)=>({type:ADD_SUBTASK,payload})


const DELETE_SUBTASK="DELETE_SUBTASK"
const delete_subtask=(payload)=>({type:DELETE_SUBTASK,payload})

const ADD_DATE="ADD_DATE"
const add_date=(payload)=>({type:ADD_DATE,payload})





export const Addtodo=()=>{


const  [state,dispatch]= useReducer(reducer,initialstate)

console.log(state)
const Reduxdispatch=useDispatch()
const [subtask,setsubtask]=useState("")

  
function addtodostodatabase(state)
{

    Reduxdispatch(add_to_database(state))


}


// const data=useSelector((store)=>store.todos.todos)

// console.log(data)




return (
<Container>





<div style={{display:"flex",justifyContent:"space-evenly"}}>


<div style={{width:"20%"}}>
<Title placeholder="title" onChange={(e)=>{dispatch(add_title(e.target.value))}}/>
<br />
<Description placeholder="type desciption" onChange={(e)=>{dispatch(add_description(e.target.value))}}/>

</div>



<div>

<input type="radio" value={"todo"} checked={state.todo_state==="todo"} onChange={(e)=>{dispatch(add_todo_state(e.target.value))}}/>

<label htmlFor="">Todo</label>
<br />
<input type="radio" value={"inprogress"} checked={state.todo_state==="inprogress"} onChange={(e)=>{dispatch(add_todo_state(e.target.value))}}/>

<label htmlFor="">Inprogress</label>

<br />
<input type="radio" value={"done"} checked={state.todo_state==="done"}  onChange={(e)=>{dispatch(add_todo_state(e.target.value))}}/>

<label htmlFor="">Done</label>

</div>






<div>

   <input type="checkbox" value={"Official"} onChange={(e)=>(dispatch(add_tags(e.target.value)))}/> 
<label htmlFor="">Official</label>
<br />
<input type="checkbox" value={"Personal"} onChange={(e)=>(dispatch(add_tags(e.target.value)))}/>
<label htmlFor="">Personal</label>
<br />
<input type="checkbox"  value={"Others"} onChange={(e)=>(dispatch(add_tags(e.target.value)))}/>
<label htmlFor="">Others</label>

<br />
</div>


<div>

<input type="text" placeholder="add subtask" onChange={(e)=>{setsubtask(e.target.value)}} />
<button onClick={()=>{dispatch(add_subtask(subtask))}}>ADD</button>

<div>
  {state.subtask.map((elem,index)=><Subtaskdiv key={index} elem={elem} index={index} dispatch={dispatch}/>)}
</div>

</div>


<div>
    <input type="date"  onChange={(e)=>{dispatch(add_date(e.target.value))}}/>
</div>

</div>


<div style={{width:"100%",textAlign:"center"}}>
<button style={{backgroundColor:"blue",marginTop:"25px"}} onClick={()=>{addtodostodatabase(state);window.location.href="/"}}>ADD TO TODO LIST</button>
</div>

</Container>)

}