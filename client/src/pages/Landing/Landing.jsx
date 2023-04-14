import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import savings from '../../assets/savings.jpg';
import style from './Landing.module.css';

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
      <section className={style.btnContainer}>
        <button onClick={handleNavigateToRegister}>Registrarse</button>
        <button onClick={handleNavigateToLogin}>Iniciar Sesión</button>
      </section>
      <img className={style.image} src={savings} alt='savings'/>
    </div>
  );
}

export default Landing;
