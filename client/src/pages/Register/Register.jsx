import React, { useState } from 'react';

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
    // Aquí es donde se podría enviar la información del formulario al backend
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de Usuario</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="name">Nombre Completo</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Register;
