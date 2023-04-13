import React from 'react';
import { useNavigate } from 'react-router-dom'; 


function Landing() {

    const nav = useNavigate()

    const handleNavigateToLogin = () => {
        nav("/login")
    }

    const handleNavigateToRegister = () => {
        nav("/register")
    }


  return (
    <div>
      <h1>Bienvenido a PresupuestApp</h1>
      <button onClick={handleNavigateToRegister}>Registrarse</button>
      <button onClick={handleNavigateToLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Landing;
