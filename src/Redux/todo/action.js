

export const ADD_TO_STORE="ADD_TO_STORE";
export const add_to_store=(payload)=>({type:ADD_TO_STORE,payload})








export const get_from_databases=(payload)=>(dispatch)=>{

fetch("http://localhost:8080/todos")
.then((res)=>res.json())
.then((res)=>{dispatch(add_to_store(res));console.log("data is fetched",res)})


}







export const add_to_database=(payload)=>(dispatch)=>{


fetch("http://localhost:8080/todos",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(payload)
})
.then((res)=>res.json())
.then((res)=>{console.log(res,"success")})
  .catch((err)=>{console.log(err)})


}