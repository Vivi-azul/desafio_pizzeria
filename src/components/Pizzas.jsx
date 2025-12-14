import React, { useEffect, useState } from 'react'

function Pizza() {
    const [ pizza, setPizza ] = useState(null)
    const apiurl = "http://localhost:5000/api/pizzas"

    useEffect(() => {
        const getPizzas = async () => {
            try {
                const res = await fetch(apiurl)
                const data = await res.json()
                setPizza(data)
                console.log("Pizza detalle:", data)
            } catch (error) {
        console.error("Error al obtener la pizza;", error)
    }
       
    }

    getPizzas()
    }, [])


  return (
    <div className='pizza-detail'>
        <img src={pizza.img} alt={pizza.name} />
        <h2> {pizza.name} </h2>
        <h3>Precio : ${pizza.price}</h3>
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
            <ul>
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>


            <button>Añadir al carrito</button>

    </div>
  )
}

export default Pizza