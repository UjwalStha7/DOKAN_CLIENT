import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";


const userInfo:User = {
    name : "Ujwal Shrestha",
    age : 22
}

const userSlice = createSlice({
    name : "user",     //room name
    initialState : userInfo,       //can be accessed anywhere
    reducers : {        //helps to manipulate initial state data.
        setName(state:User, action:PayloadAction<string>){ //by default state and action
            state.name = action.payload
        },
        setAge(state:User, action:PayloadAction<number>){         
            state.age = action.payload
        }

    }
})
// actions
//const setName = userSlice.actions.setName  //actuall trigger where reducer is for just show
export const {setName, setAge} = userSlice.actions  //without reducer there is no action

export default userSlice.reducer  //compulsory
