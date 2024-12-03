const store= require('./app/store');
const { burgerActions } = require('./features/burger/burgerSlice');
const { fetchProducts } = require('./features/products/productSlice');
const pizzaActions = require("./features/pizza/pizzaSlice").pizzaActions

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(()=> {
    console.log("update state", store.getState());
    
})
store.dispatch(fetchProducts()).then(() =>{
    console.log('final state after updating', store.getState());
    
})

// store.dispatch(pizzaActions.pizza_order())
// store.dispatch(pizzaActions.pizza_order())
// store.dispatch(burgerActions.burger_order())
// store.dispatch(burgerActions.burger_order())
unsubscribe()
