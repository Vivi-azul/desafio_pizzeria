import CardPizza from "./CardPizza";
import "./Gallery.css";

export default function Gallery({ pizzas }) {
    
  if (!Array.isArray(pizzas)) return null;

  return (
    <div className="gallery">
      <h2 className="title">Pizzas Disponibles</h2>

      <div className="cards-grid">
        {pizzas.map((pizza, i) => (
          <div className="card-wrapper" key={pizza.id ?? i}>
            <CardPizza
              img={pizza.img}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}