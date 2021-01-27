import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from './profile-reducer'



let reduses = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer
})

let store = createStore(reduses)



export default store