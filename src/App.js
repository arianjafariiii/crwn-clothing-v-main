import logo from './logo.svg';
import './App.css';
import CategoryItem from './components/category-item/category-item.components';
import CategoriesContainer from './components/categories-container/categories-container.component';
import {Route, Routes} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './routes/navbar/navbar.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.componrnt';
 
import Shop from './routes/shop/shop.component';



function App() {
  
    
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="/shop" element={<Shop/>} /> 
          <Route path="/auth" element={<Authentication/>} /> 
          <Route path="/checkout" element={<Checkout/>} />
          
        </Route> 
      </Routes>
      
    </div>
  );
}

export default App;
