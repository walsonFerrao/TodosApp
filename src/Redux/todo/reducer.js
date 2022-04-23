import { ADD_TO_STORE } from "./action"

const initstate={

todos:[]

}

export const todoreducer=(store=initstate,action)=>{

 switch (action.type) {
     case ADD_TO_STORE:
          return {...store,todos:[...action.payload]}
        
     default:
        return store
 }
}