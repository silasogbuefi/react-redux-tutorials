import './App.css';
import PizzaBox from './components/PizzaBox';
import {Provider} from 'react-redux'
import store from './components/redux/store';
import HookContainer from './components/HooksContainer';
import BurgerBox from './components/BurgerBox';
import CustomerChoice from './components/CustomerChoice';
import ProductsContainer from './components/ProductsContainer';

function App() {
  return(
    <Provider store={store}>

      {/* <PizzaBox /> */}
      {/* <BurgerBox />  */}
      {/* <HookContainer /> */}
        {/* <CustomerChoice /> */}
        <ProductsContainer />
    </Provider>
  )
}

export default App;
