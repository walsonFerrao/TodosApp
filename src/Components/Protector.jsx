import { Navigate, Outlet } from "react-router"



export const Protector=()=>{


const userdetail=localStorage.getItem("userdetail")



return userdetail?<Outlet/>:<Navigate to="/login" />




}

