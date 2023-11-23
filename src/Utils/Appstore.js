import { configureStore } from "@reduxjs/toolkit";
import placesReducer from './plcesSlice.js'
import configReducer from './configSlice.js'

const Appstore = configureStore(
    {
        reducer:{
            places: placesReducer,
            config: configReducer,
        },
    });

export default Appstore