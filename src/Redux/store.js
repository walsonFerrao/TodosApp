import {todoreducer} from "./todo/reducer"

import { createStore,applyMiddleware,combineReducers } from "redux"
import { userreducer } from "../Redux/user/reducer"
import thunk from "redux-thunk"

export const  rootreducer=combineReducers({

todos:todoreducer,
user:userreducer

})



export const store=createStore(rootreducer,applyMiddleware(thunk))


