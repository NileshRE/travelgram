import { configureStore } from "@reduxjs/toolkit";
import placesReducer  from './plcesSlice.js'

const Appstore = configureStore(
    {
        reducer:{
            places: placesReducer,
        },
    });

export default Appstore