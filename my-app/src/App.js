import './App.css';
import MyRoutes from './MyRoutes';
// import { legacy_createStore } from 'redux';
//createStore ->  used to know for the compiler that any reducer is a store
import { Provider } from 'react-redux';
//Provider -> to pass data from reducer to component
// import cartReducer from './redux/reducers/cartReducer';
import store from './store';

const App=()=> {
  // const store = legacy_createStore(cartReducer)
  return (
    <>
    <Provider store={store}>
     <MyRoutes/>
     </Provider>
    </>
  );
}

export default App;
