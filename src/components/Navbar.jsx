import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FaPizzaSlice } from 'react-icons/fa';
import { Cart } from 'react-bootstrap-icons';
import './Navbar.css';

function Navbar({Token, Total}) {
  return (
    <nav className="navbar">
     
      <div className="nav-links">
         <h2>Pizzería Mamma Mia</h2>

         <Button as={Link} to="/" variant="outline-warning" style={{ marginRight: '10px', display: 'flex', alignItems: 'center'}}> <FaPizzaSlice style={{ marginRight: '5px' }} /> Home
          </Button>

        
        {Token ? (
          <>

          <Button variant="outline-warning">
              🔓 Profile
            </Button>
            <Button variant="outline-warning">
              🔒 Logout
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} to="/login" variant="outline-warning">
              🔐 Login
            </Button>
            <Button as={Link} to="/register" variant="outline-warning">
              🔐 Register
            </Button>
          </>
        )}       
      </div>
      <Button className='btn' variant="outline-warning" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
        <Cart style={{ marginRight: '5px' }} />
        ${Total}
        </Button>

    </nav>
  );
}

export default Navbar;
