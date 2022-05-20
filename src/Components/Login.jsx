import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';


export const  Wrapper=styled.div`


width:20%;
color:whitesmoke;
margin:auto;
margin-top:100px;
background-color:whitesmoke;
padding:50px;


`



export const Login=()=>{

  const [name,setname]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
let a=0
function storelocaldata()
{
localStorage.setItem("userdetail",JSON.stringify({name,password}))

navigate("/")
}

return(
<Wrapper>
    <input type="text" placeholder='name' onChange={(e)=>{setname(e.target.value)}} />
    <br />
    <input type="text" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}}/>
    <br />
    <button disabled={!name||!password} style={{width:"20%",marginLeft:"10px"}} onClick={()=>{storelocaldata()}} >login</button>

<br />
<br />
    <button onClick={()=>{navigate("/register")}}>register</button>
</Wrapper>
)
}