import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {orderPizza} from  './redux'


function HookContainer() {

   const pizzaBase = useSelector(state => state.pizzaBase)

    const dispatch =   useDispatch();
   
   

  return (
    <div className='container'>
        <h2 className='text'>Number of Pizza base available - {pizzaBase}</h2>
        <button className='btn' onClick={() => dispatch(orderPizza())}>order pizza</button>
    </div>
  )
}





export default HookContainer