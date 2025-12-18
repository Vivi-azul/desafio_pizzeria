import ProductCard from "../components/ProductCard";
// import Header from '../components/Header';
// import { pizzasImportadas } from "../components/pizzas.js";
// import Navbar from '../components/Navbar.jsx';

const products = [
  { id: 1, name: "Zapatillas", price: 120 },
  { id: 2, name: "Remera", price: 40 },
  { id: 3, name: "Gorra", price: 25 },
];

const Home = () => {
  return (
    <div>
      <h1>Productos</h1>

      {products.map ((product) => (
        <ProductCard key={product.id} product={product} />
      ))}      
    </div>
  );
};

export default Home;