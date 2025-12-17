import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setMessage("Todos los campos son obligatorios.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Las contraseñas no coinciden.");
            return;
        }

        setMessage("Registro completado con éxito.");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto"}}>
           <h2>Registro</h2>

           <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label><br/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Confirmar Contraseña:</label><br/>
                <input type="password" value="{confirmPassword}" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button type="submit" style={{ marginTop: "10px "}}>Registrarse</button>
           </form>

           {message && <p>{message} </p> }

           <p>
            ¿Ya tienes cuenta? <Link to="/login">Inicia aquí</Link>
           </p>
        </div>
    );


}
