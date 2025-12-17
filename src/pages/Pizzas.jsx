import React from 'react';
import { pizzasImportadas } from "../components/pizzas";

function Pizza() {
    const pizza = pizzasImportadas.find(p => p.id === "P001");

    if (!pizza) return <p>Pizza no encontrada</p>;
    
    return (
        <div>
            <h2> {pizza.name} </h2>
            <img src={pizza.img} alt={pizza.name} />
            <h3>Precio : ${pizza.price}</h3>
            <p>{pizza.desc}</p>
            <h3>Ingredientes:</h3>
                <ul>
                    {pizza.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                ))}
                </ul>

        <button>Añadir al carrito</button>
    </div>
  );  
}

export default Pizza;