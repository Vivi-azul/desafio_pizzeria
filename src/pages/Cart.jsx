import React from 'react';
import { pizzaCart } from '../components/pizzas';
import './Cart.css';

export default function Cart() {
    const [cart, setCart] = React.useState(pizzaCart);

    const aumentar = (id) => {
        setCart(prev => 
            prev.map(item =>
                item.id === id? {...item, count: item.count + 1 } : item
            )
        );
    };

    const disminuir = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id? {...item, count: item.count - 1 } : item)
        );
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className='carrito'>
        <h2>Detalle del Pedido</h2>

        {cart.map((pizza) => (
            <div className='cart-item' key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} style={{ width: "80px", borderRadius: "6px"}}
            />

            <div className='cart-info'>
                <h4>{pizza.name} </h4>
                <p>${pizza.price} </p>
            </div>

        <div className='cart-controls'>
            <button onClick={() => disminuir(pizza.id)}> - </button>
            <span> {pizza.count} </span>
            <button onClick={() => aumentar(pizza.id)}> + </button>
        </div>
        </div>


        ))}

        <h3>Total : ${total}</h3>

        <button>Pagar</button>
    </div>
  );
}