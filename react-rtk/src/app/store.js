import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../features/pizza/pizzaSlice';
import burrgerReducer from '../features/burger/burgerSlice'
import productReducer from '../features/products/productSLice'

const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        burger: burrgerReducer,
        product: productReducer
    }
})

export default store;