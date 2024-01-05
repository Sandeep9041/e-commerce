import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        value : []
    },
    reducers : {      
        addItem : (state,action)=>{       
          state.value.push({ ...action.payload});
    } 
}
})
export const {addItem} = cartSlice.actions;
export default cartSlice;