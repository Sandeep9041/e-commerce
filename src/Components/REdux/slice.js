import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        value : [],
        count: 0
    },

    reducers : {      
        addItem : (state,action)=>{
            const item = state.value.find(each=>each.id === action.payload.id)
            if (!item){
                state.value.push({ ...action.payload});
            }       
    }, removeItem : (state,action)=>{
        state.value.splice(state.value.findIndex((item) => item.id === action.payload), 1);
    }
}
})
export const {addItem,removeItem,plusItem} = cartSlice.actions;
export default cartSlice;