import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Wishlist from './components/wishlist';
import Cart from './components/cart';
import  Register  from './components/register';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/Wishlist' element={<Wishlist/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
