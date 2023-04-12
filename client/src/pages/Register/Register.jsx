import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
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
      toast('All the fields are required', {
        position: "top-center",
        theme: "dark",
        });
       } else if(formData.username === ""){
        toast('Username is required', {
            position: "top-center",
            theme: "dark",
            });
       } else if(formData.name === ""){
        toast('Name is required', {
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
    <form onSubmit={handleSubmit}>
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
