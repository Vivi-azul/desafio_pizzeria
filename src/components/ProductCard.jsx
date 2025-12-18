import { useCart } from "../context/CartContext";
import Product from "../context/Product";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
                Añadir al carrito
            </button>
        </div>
    );
};

export default ProductCard;