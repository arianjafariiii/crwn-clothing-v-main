import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navbar from './routes/navbar/navbar.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import Checkout from './routes/checkout/checkout.componrnt.jsx';
import { useEffect } from 'react';
import { checkUserSession, setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

import Shop from './routes/shop/shop.component.jsx';



function App() {
  const dispatch = useDispatch() ;
  useEffect(() => {
    dispatch(checkUserSession());
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
