import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage("Todos los campos son obligatorios.");
            return;
        }

        if (password.length < 6) {
            setMessage("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        setMessage("Login exitoso");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto" }}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <br />
                    <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                </div>

                <button type="submit" style={{ marginTop: "10px"}}>Ingresar</button>

                </form>

                <p>
                    ¿No tienes cuenta?
                    <Link to="/register">
                    Regístrate aquí
                    </Link>
                </p>

                {message && <p>{message}</p>}
        </div>        
    );
}