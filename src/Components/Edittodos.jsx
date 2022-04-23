
import { useEffect, useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
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

// const initialstate={
// title:"",
// description:"",
// subtask:[],
// todo_state:"todo",
// tags:[],
// date:""


// }

const Subtaskdiv=(props)=>
{

   



return(

<div style={{display:"flex",gap:"25px",justifyContent:"space-between",marginTop:"5px"}}>

<div>{props.elem} </div>
<button onClick={()=>{props.deletesubtask(props.index)}} >delete</button>

</div>


)



}




// const reducer=(state,{type,payload})=>
// {

// switch(type){

// case ADD_TITTLE:
//     return {...state,title:payload};

//     case ADD_DESCRIPTION:
//         return {...state,description:payload};

//         case ADD_TODO_STATE:
//             return {...state,todo_state:payload}

//                case ADD_TAGS:
//                    return {...state,tags:[...state.tags,payload]}

//                    case ADD_SUBTASK:
//                        return {...state,subtask:[...state.subtask,payload]}

//                        case DELETE_SUBTASK:
//                            return {...state,subtask:state.subtask.filter((elem,index)=>(index!==payload))}

//                            case ADD_DATE:
//                                return {...state,date:payload}
// default:
//     throw new Error();




// }

// }

// const ADD_TITTLE="ADD_TITTLE"
// const add_title=(payload)=>({type:ADD_TITTLE,payload})

// const ADD_DESCRIPTION="ADD_DESCRIPTION"
// const add_description=(payload)=>({type:ADD_DESCRIPTION,payload})

// const ADD_TODO_STATE="ADD_TODO_STATE"
// const add_todo_state=(payload)=>({type:ADD_TODO_STATE,payload})

// const ADD_TAGS="ADD_TAGS"
// const add_tags=(payload)=>({type:ADD_TAGS,payload})

// const ADD_SUBTASK="ADD_SUBTASK"
// const add_subtask=(payload)=>({type:ADD_SUBTASK,payload})


// const DELETE_SUBTASK="DELETE_SUBTASK"
// const delete_subtask=(payload)=>({type:DELETE_SUBTASK,payload})

// const ADD_DATE="ADD_DATE"
// const add_date=(payload)=>({type:ADD_DATE,payload})





export const Edittodos=()=>{

const [subtaskedit,setsubtask]=useState("")

const Reduxdispatch=useDispatch()

  


function addtodostodatabase(state)
{

    Reduxdispatch(add_to_database(state))


}
const {id}=useParams()
console.log(id)

const [state,setstate]=useState({})

useEffect(()=>{


 fetch(`http://localhost:8080/todos/${id}`,{
   method:"GET",
   headers:{
       "Content-Type":"application/json"
   }
   


 })
.then((res)=>res.json())
.then((res)=>setstate(res))
.catch((err)=>{console.log(err)})

},[])


function submitchanges()
{

fetch(`http://localhost:8080/todos/${id}`,{

  method:"PUT",
  headers:{
      "Content-Type":"application/json"
  },
  body:JSON.stringify(state)




})
.then((res)=>res.json())
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})
}





console.log(state,"state")

function changetitle(e)
{
    setstate({...state,title:e.target.value})
}
function description(e)
{
    setstate({...state,description:e.target.value})
  
}
function changeradio(e)
{
    setstate({...state,todo_state:e.target.value})
  
}
function addcheckbox(e)
{
if(state.tags.includes(e.target.value))
{
    // console.log()
    let temp=state.tags.filter((a)=>!e.target.value)
    setstate({...state,tags:[...temp]})

}
else{
    setstate({...state,tags:[...state.tags,e.target.value]})


}

}

function addsubtask()
{

setstate({...state,subtask:[...state.subtask,subtaskedit]})

}

function deletesubtask(i)
{

let newarray=state.subtask.filter((a,index)=>index!=i)
// console.log(e,"newww")

setstate({...state,subtask:[...newarray]})


}



return (
<Container>





<div style={{display:"flex",justifyContent:"space-evenly"}}>


<div style={{width:"20%"}}>
<Title placeholder="title"  defaultValue={state.title} onChange={(e)=>{changetitle(e)}} />
<br />
<Description placeholder="type desciption" defaultValue={state.description} onChange={(e)=>{description(e)}}/>

</div>



<div>

<input type="radio" value={"todo"} checked={state.todo_state==="todo"} onChange={(e)=>{changeradio(e)}} />

<label htmlFor="">Todo</label>
<br />
<input type="radio" value={"inprogress"} checked={state.todo_state==="inprogress"} onChange={(e)=>{changeradio(e)}} />

<label htmlFor="">Inprogress</label>

<br />
<input type="radio" value={"done"} checked={state.todo_state==="done"} onChange={(e)=>{changeradio(e)}} />

<label htmlFor="">Done</label>

</div>






<div>

   <input type="checkbox" value={"Official"} checked={state.tags?.includes("Official")} onChange={(e)=>{addcheckbox(e)}} /> 
<label htmlFor="">Official</label>addcheckbox
<br />
<input type="checkbox" value={"Personal"} checked={state.tags?.includes("Personal")} onChange={(e)=>{addcheckbox(e)}}/>
<label htmlFor="">Personal</label>
<br />
<input type="checkbox"  value={"Others"} checked={state.tags?.includes("Others")}  onChange={(e)=>{addcheckbox(e)}}/>
<label htmlFor="">Others</label>

<br />
</div>


<div>

<input type="text" placeholder="add subtask" onChange={(e)=>{setsubtask(e.target.value)}} />
<button  onClick={addsubtask}>ADD</button>

<div>
  {state.subtask?.map((elem,index,arr)=><Subtaskdiv key={index} elem={elem} index={index} deletesubtask={deletesubtask} />)}
</div>

</div>


<div>
    <input type="date" defaultValue={state.date}  />
</div>

</div>


<div style={{width:"100%",textAlign:"center"}}>
<button style={{backgroundColor:"blue",marginTop:"25px"}} onClick={()=>{submitchanges();;window.location.href="/"}}>SUBMIT CHANGES</button>
</div>

</Container>)

}