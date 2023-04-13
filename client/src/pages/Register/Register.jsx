import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import style from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

function Register() {

  const dispatch = useDispatch();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(formData.username === "" && 
       formData.name === "" && 
       formData.email === "" && 
       formData.password === ""){
      toast('Todos los campos son requeridos', {
        position: "top-center",
        theme: "dark",
        });
       } else if(formData.username === ""){
        toast('El nombre de usuario es requerido', {
            position: "top-center",
            theme: "dark",
            });
       } else if(formData.name === ""){
        toast('El nombre de completo es requerido', {
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
          dispatch(registerUser(formData));
          nav("/login")
       }
  }

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <h1>Registrate</h1>
      <div>
        <label htmlFor="username">Nombre de Usuario</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="name">Nombre Completo</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}  />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange}  />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange}  />
      </div>
      <button type="submit">Registrarse</button>
      <ToastContainer/>
    </form>
  );
}

export default Register;
