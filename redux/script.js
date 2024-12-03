
const redux = require('redux');
const createStore = redux.createStore
const ORDER_PIZZA = 'ORDER_PIZZA'

// const action = {
//     type: ORDER_PIZZA,
//     shop_name: 'Pizza shop'
// }

// Action Creator
function orderPizza() {
    return {
        type: ORDER_PIZZA,
        
    }
}

//Reducer
const initialState = {
    pizzaBase: 100,
    
}

const reducer =(state=initialState, action) => {
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state,
                pizzaBase: state.pizzaBase-1
            }
            default:
                return state;
    }
}

// STORE

// store holds application state

const store = createStore(reducer)


// it exposes a method called getState which gives app current state in the store
console.log('Initial State',store.getState());

// registers listeners via subscribe(listener)
const unsubscribe =  store.subscribe(()=> console.log("Updated state", store.getState())
)


// Allows state to be updated via dispatch
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
unsubscribe()
store.dispatch(orderPizza())







