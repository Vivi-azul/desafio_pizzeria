import React, { useEffect } from 'react';
import Header from '../components/Header';
// import { pizzasImportadas } from "../components/pizzas.js";
import Gallery from "./Gallery.jsx"
// import Navbar from "../components/Navbar";

function Home () {
    const [pizzas, setPizzas] = useState([])

    const apiUrl = "http://localhost:5000/api/pizzas"

    useEffect(() => {
        const getPizzas = async () => {
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setPizzas(data)
                console.log("Pizzas desde la API:", data)
            } catch (error) {
                console.error("Error al obtener pizzas:", error)
            }
        }

    getPizzas()

    }, [])

    return (
        <div>            
            <Header />

            <Gallery pizzas={pizzas} />
        </div>
    );
}

export default Home;