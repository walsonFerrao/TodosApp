
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Wrapper } from "./Login"
import {add_user} from '../Redux/user/action'
import { useNavigate } from "react-router"


export const Register=()=>{

const [name,setname]=useState("")
const [password,setpassword]=useState("")
const [email,setemail]=useState("")
const dispatch=useDispatch();
const navigate=useNavigate()

function registeruser()
{

// fetch("https://reqres.in/api/register",{

// method:"POST",
// headers:{
// "Content-Type":"application/json",
// body:{email:"eve.holt@reqres.in",password:"pistol"}
// }
// })
// .then((res)=>res.json())
// .then((res)=>{console.log(res)})

dispatch(add_user({name,email,password}))
navigate("/")


}


return (

    <Wrapper>

   <input type="text" placeholder="name" onChange={(e)=>{setname(e.target.value)}}/>
   <br />
   <input type="text" placeholder="email" onChange={(e)=>{setemail(e.target.value)}}/>
   <br />
   <input type="text" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}/>
   <br />
   <button onClick={()=>{registeruser()}}>register</button>
    </Wrapper>



)





}

