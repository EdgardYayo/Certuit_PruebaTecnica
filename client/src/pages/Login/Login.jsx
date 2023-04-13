import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import style from "./Login.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions';

function Login() {

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const nav = useNavigate();

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
        toast('Todos los campos son requeridos', {
            position: "top-center",
            theme: "dark",
            });
       } else if(formData.email === ""){
        toast('El correo electronico es requerido', {
            position: "top-center",
            theme: "dark",
            });
       } else if(formData.password === ""){
        toast('La contraseña es requerida', {
            position: "top-center",
            theme: "dark",
            });
       } else {
        dispatch(loginUser(formData));            
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
      { !Array.isArray(userData) && <button onClick={() => nav("/home")}>Entra ala App</button> }
      <ToastContainer/> 
    </form>
  );
}

export default Login;
