import {configureStore} from "@reduxjs/toolKit"
import todoReducer from '../features/todoSlice'


export const store = configureStore({
    reducer: todoReducer
})