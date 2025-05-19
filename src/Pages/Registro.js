// src/pages/Registro.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    usuario: '',
    telefono: '',
    password: ''
  });

  const [mostrarPassword, setMostrarPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', form);
    // Aquí iría lógica para guardar usuario
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <br /><br />
        <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} required />
        <br /><br />
        <input type="text" name="usuario" placeholder="Usuario" value={form.usuario} onChange={handleChange} required />
        <br /><br />
        <input type="tel" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
        <br /><br />
        <div>
          <input
            type={mostrarPassword ? 'text' : 'password'}
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={() => setMostrarPassword(!mostrarPassword)} style={{ marginLeft: '10px' }}>
            {mostrarPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <br />
        <button type="submit">Registrarse</button>
        <br /><br />
        <button type="button" onClick={() => navigate('/login')}>¿Ya tienes cuenta? Inicia sesión</button>
      </form>
    </div>
  );
}

export default Registro;
