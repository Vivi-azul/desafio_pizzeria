import React from "react";
import CardPizza from "./CardPizza";
import "./Gallery.css";

export default function Gallery(props) {
    const pizzas = props.pizzas;

    return (
        <div className="gallery">
            <h2 className="title">Pizzas Disponibles</h2>
            <div className="cards-grid">
                {pizzas.map((pizza, i) => (
                    <div className="card-wrapper" key={i}>
                        <CardPizza key={i} img={pizza.img} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} />

                    </div>
                    ))}
            </div>
            
        </div>
    );
}