import { createSlice } from "@reduxjs/toolkit";

const placesSlice= createSlice({
    name:'places',
    initialState:{
        newPlaces:null,
        pics:null
    },
    reducers:{
        addNewPlaces:(state, action) =>{
            state.newPlaces=action.payload;
        },
        addPics:(state, action)=>{
            state.pics=action.payload;
        }
    }
})


export const {addNewPlaces, addPics} = placesSlice.actions; 


export default placesSlice.reducer;