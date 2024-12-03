const redux = require('redux')
const createStore = redux.createStore

const produce = require('immer').produce;
const FILL_UPDATE = "FILL_UPDATE";

const initialState= {
    type: 'Veggie',
    ingredients: {
        bread: "whole grain",
        filling: "Lettuce and tomato",
        sauce: "mustard"
    }
}

const updateFill = (filling) => {
    return{
        type: FILL_UPDATE,
        payload: filling
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FILL_UPDATE:
            // return{
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         filling: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.ingredients.filling = action.payload
            })
            default:
                return state;
    }

}

 const store =  createStore(reducer)
 console.log("initial state", store.getState());
 const unsubscribe = store.subscribe(()=> {
    console.log(('updated state', store.getState()));
    
 })
 store.dispatch(updateFill('grilled veggies and cheese'))
 unsubscribe();
 