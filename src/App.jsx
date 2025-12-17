import { useState } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
// import CardPizza from './components/CardPizza';
// import Gallery from './components/Gallery';
// import Header from './components/Header';
import Pizzas from "./pages/Pizzas.jsx";
import Profile from './pages/Profile.jsx';
// import { pizzaCart } from './components/pizzas';
import Cart from './pages/Cart.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx'
import Footer from './components/Footer';


function App() {
    //  const [pizzas, setPizzas] = useState(pizzasImportadas); 

  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <Pizzas/> */}
      {/* <Gallery /> */}
      {/* <CardPizza /> */}
      {/* <Cart/> */}

      {/* <Link /> */}

      {/* <Header /> */}
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/p001" element={<Pizzas />} />
      <Route path='profile' element={<Profile />} />
      <Route path='/404' element={< NotFound />} />
      <Route path='*' element={<Navigate to="/404" />} />

    </Routes>

    <Footer />
      
    </>

  );
}

export default App;
