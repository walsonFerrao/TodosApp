import { ADD_USER } from "./action";

const initstate={

userdetail:{

}

}

export const userreducer=(store=initstate,action)=>{


switch (action.type) {
    case ADD_USER:
        return {...store,userdetail:{...action.payload}}


    default:
        return store;
}



}