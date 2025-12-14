import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPizza from './components/CardPizza';
import Gallery from './components/Gallery';
// import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './components/Home';
import { Pizzas } from "./components/Pizzas.jsx"
// import { pizzasImportadas } from './components/pizzas';
// import Cart from './components/Cart';


// import Register from './components/Register';
// import Login from './components/Login';

function App() {
    const userToken = null;
    const carritoTotal = 25000;

    // const [pizzas, setPizzas] = useState(pizzasImportadas); 

  return (
    <>
    
      <Navbar Token={userToken} Total={carritoTotal} titulo="Mamma Mia"/>
      {/* <Home/> */}
      <Pizzas/>
      {/* <Cart/> */}

      {/* <Header /> */}
    
    <Routes>
      {/* <Route path="/" element={<Home pizzas={pizzas}/>} /> */}
      {/* <Route path="/Cart" element={<Cart />} /> */}

{/*           
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

      </Routes>


      <Footer />
      
    </>

    

  );
}

export default App
