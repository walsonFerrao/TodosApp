

import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import styled from  "styled-components"

const UserHeading=styled.div`

font-family:'Times New Roman', Times, serif;
font-size:25px;
font-weight:bold;
height:40px;

`

const UserDetail=styled.div`

font-family:'Times New Roman', Times, serif;
font-size:20px;
background-color:${(prop)=>prop.color};
width:70%;
margin:auto;
margin-top:5px;


`

const LogoutButtton=styled.button`

font-family:'Times New Roman', Times, serif;
font-size:20px;
background-color:${(prop)=>prop.color};
width:100%;
margin:auto;
margin-top:5px;


`


export const Sidebar=()=>{

const navigate=useNavigate()
function logout()
{

localStorage.removeItem("userdetail")
navigate("/login")

}

const states=useSelector((store)=>store.todos.todos)

console.log(states.filter((e)=>e.tags.includes("Personal")).length)





let user=JSON.parse(localStorage.getItem("userdetail")) 
console.log(user)

return (
    <div style={{width:"13%",backgroundColor:"gray",textAlign:"center",paddingTop:"30px"}}>
<UserHeading>User Details</UserHeading>
<h3>user: {user.name}</h3>
<UserDetail color="rgb(219,232,252)">ALL {states.length}</UserDetail>
<UserDetail color="rgb(214,232,213)">Personal {states.filter((e)=>e.tags.includes("Personal")).length}</UserDetail>
<UserDetail color="rgb(225,212,231)">Office {states.filter((e)=>e.tags.includes("Office")).length}</UserDetail>
<UserDetail color="rgb(255,230,204)">Others {states.filter((e)=>e.tags.includes("Others")).length}</UserDetail>
<LogoutButtton onClick={()=>{logout()}}>Logout</LogoutButtton>

</div>

)








}