import React, { useState } from 'react';

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
    // Aquí es donde se podría enviar la información del formulario al backend
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
