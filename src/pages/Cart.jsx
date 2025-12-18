// import React from 'react';
// import { pizzaCart } from '../components/pizzas';
// import './Cart.css';

// export default function Cart() {
//     const [cart, setCart] = React.useState(pizzaCart);

//     const aumentar = (id) => {
//         setCart(prev => 
//             prev.map(item =>
//                 item.id === id? {...item, count: item.count + 1 } : item
//             )
//         );
//     };

//     const disminuir = (id) => {
//         setCart(prev =>
//             prev.map(item =>
//                 item.id === id? {...item, count: item.count - 1 } : item)
//         );
//     };

//     const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

//   return (
//     <div className='carrito'>
//         <h2>Detalle del Pedido</h2>

//         {cart.map((pizza) => (
//             <div className='cart-item' key={pizza.id}>
//             <img src={pizza.img} alt={pizza.name} style={{ width: "80px", borderRadius: "6px"}}
//             />

//             <div className='cart-info'>
//                 <h4>{pizza.name} </h4>
//                 <p>${pizza.price} </p>
//             </div>

//         <div className='cart-controls'>
//             <button onClick={() => disminuir(pizza.id)}> - </button>
//             <span> {pizza.count} </span>
//             <button onClick={() => aumentar(pizza.id)}> + </button>
//         </div>
//         </div>


//         ))}

//         <h3>Total : ${total}</h3>

//         <button>Pagar</button>
//     </div>
//   );
// }

import { useCart } from "../context/CartContext";

const Cart = () => {
    const {
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
    } = useCart();

    if (cart.length === 0) {
        return <h2>El carrito está vacío</h2>;
    }
    return (
        <div>
            <h1>Carrito de compras</h1>

            {cart.map((item) => (
                <div key={item.id}>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>

                    <button onClick={() => addToCart(item)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            ))}

            <hr />

            <h2>Total de la compra: ${totalPrice} </h2>
            </div>
    );
}

export default Cart;