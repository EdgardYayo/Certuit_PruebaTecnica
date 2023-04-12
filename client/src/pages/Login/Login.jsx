import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import style from "./Login.module.css";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(formData.email === "" &&
       formData.password === ""){
        toast('All the fields are required', {
            position: "top-center",
            theme: "dark",
            });
       } else if(formData.email === ""){
        toast('Email is required', {
            position: "top-center",
            theme: "dark",
            });
       } else if(formData.password === ""){
        toast('Password is required', {
            position: "top-center",
            theme: "dark",
            });
       } else {

       }
  }

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <h1>Inicia Sesion</h1>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange}/>
      </div>
      <button type="submit">Iniciar Sesión</button>
      <ToastContainer/> 
    </form>
  );
}

export default Login;
