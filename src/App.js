import './App.css';
import CategoryItem from './components/directory-item/directory-item.components';
import CategoriesContainer from './components/categories-container/categories-container.component';
import {Route, Routes} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './routes/navbar/navbar.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.componrnt';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUserAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

import Shop from './routes/shop/shop.component';



function App() {
  const dispatch = useDispatch() ;
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    })
    return unsubscribe;
}, [dispatch])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="shop/*" element={<Shop/>} /> 
          <Route path="/auth" element={<Authentication/>} /> 
          <Route path="/checkout" element={<Checkout/>} />
          
        </Route> 
      </Routes>
      
    </div>
  );
}

export default App;
