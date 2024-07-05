import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      correo: email,
      contrasena: password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.status === "OK") { // Verifica si la respuesta es exitosa y el estado es "OK"
        setError(null);
        setIsLoggedIn(true);
      } else {
        throw new Error(data.message || "Error al iniciar sesión");
      }

    } catch (error) {
      console.error("Error:", error.message);
      setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
      setIsLoggedIn(false); // Reiniciar el estado de inicio de sesión
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div style={{ color: "green" }}>Inicio de sesión exitoso!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}

          <label>Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Iniciar sesión</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
