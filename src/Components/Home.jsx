



import { Sidebar } from "./Sidebar";
import { Taskdiv } from "./Styled/Task";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import {get_from_databases} from '../Redux/todo/action'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Container=styled.div`
display:flex;
width:"100%";




`


export const Home=()=>{




const data=useSelector((store)=>store.todos.todos)
// const [todoarray,settodoarray]=useState([])

    const dispatch=useDispatch()

useEffect(()=>{

    dispatch(get_from_databases())

    // settodoarray([...data])

},[])
const navigate=useNavigate()

const todostate=data.filter((e)=>e.todo_state=="todo")
const inprogressstate=data.filter((e)=>e.todo_state=="inprogress")
const donesstate=data.filter((e)=>e.todo_state=="done")

console.log(todostate,"jjjh")
return (
<Container>


<Sidebar/>

<div style={{width:"80%",backgroundColor:"red",border:"1px solid black",display:"flex",justifyContent:"space-evenly"}}>
    <div style={{width:"30%"}}>
        <h1 style={{textAlign:"center"}}>TODO</h1>
    {todostate.map((ele,index)=><Taskdiv key={index} element={ele}/>)}

    </div>
    <div style={{width:"30%"}}>
    <h1 style={{textAlign:"center"}}>INPROGRESS</h1>

    {inprogressstate.map((ele,index)=><Taskdiv key={index} element={ele}/>)}
    </div>
    <div style={{width:"30%"}}>
    <h1 style={{textAlign:"center"}}>DONE</h1>

    {donesstate.map((ele,index)=><Taskdiv key={index} element={ele} />)}

    </div>

</div>


<button style={{backgroundColor:"blue",width:"100px",height:"40px",color:"white",fontSize:"12px"}} onClick={()=>{navigate("/add")}}>ADD TODOS</button>
</Container>

)




}