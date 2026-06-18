import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { ICartInitialState, ICartItem } from "../pages/cart/types";
import { Status, type StatusType } from "../globals/types/type";
import type { AppDispatch } from "./store";
import { APIWITHTOKEN } from "../http";


const initialState:ICartInitialState = {
    items : [], 
    status : Status.LOADING
}
const cartSlice = createSlice({
    name : "cart", 
    initialState, 
    reducers : {
        setItems(state:ICartInitialState,action:PayloadAction<ICartItem[]>){
            state.items = action.payload
        }, 
        setStatus(state:ICartInitialState,action:PayloadAction<StatusType>){
            state.status = action.payload
        }
    }
})
export const {setItems,setStatus} = cartSlice.actions
export default cartSlice.reducer

function addToCart(){
    return async function addToCartThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.post("/cart")
        } catch (error) {
            
        }
    }
}