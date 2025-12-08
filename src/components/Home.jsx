import React from 'react';
import Header from '../components/Header';
import { pizzasImportadas } from "../components/pizzas.js";
import Gallery from "./Gallery.jsx"
// import Navbar from "../components/Navbar";

function Home ({ pizzas }) {

    console.log(pizzasImportadas);

    return (
        <div>            
            <Header />

            <Gallery pizzas={pizzas} />
        </div>
    );
}

export default Home;