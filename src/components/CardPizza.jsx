import Card from 'react-bootstrap/Card';

function CardPizza(props) {
  return (
    <Card className='card-pizza'>
      <Card.Img className='card-img' variant="top" src={props.img} />
      <Card.Body className='textos'>
        <Card.Title>{props.name} </Card.Title>
        <p><strong>Ingredientes: </strong></p>
       <ul>
        {props.ingredients.map((ing, index) => (
          <li key={index}> {ing} </li>
        ))}
        </ul> 
         
        <p>
          <strong>${props.price}</strong> 
        </p>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Ver más</Card.Link>
        <br/>
        <Card.Link href="#">Añadir</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;