import React from "react";
import { Link } from 'react-router-dom';
import NotFoundImg from '../assets/NotFound.png'

function NotFound() {
    return (
        <div className="not-found">
            <img src={ NotFoundImg } alt="Página no encontrada" />
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>Lo lamento, la página no existe</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default NotFound;