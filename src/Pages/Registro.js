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
    navigate('/login');
  };
return (
  <div className="login-background">
    <div className="login-card">
      <h2 style={{ marginBottom: '20px' }}>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required className="login-input" />
        <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} required className="login-input" />
        <input type="text" name="usuario" placeholder="Usuario" value={form.usuario} onChange={handleChange} required className="login-input" />
        <input type="tel" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required className="login-input" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type={mostrarPassword ? 'text' : 'password'}
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            className="login-input"
            style={{ flex: 1 }}
          />
          <button type="button" onClick={() => setMostrarPassword(!mostrarPassword)} className="toggle-btn">
            {mostrarPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <br />
        <button type="submit" className="login-button">Registrarse</button>
        <br /><br />
        <button type="button" className="login-button" onClick={() => navigate('/login')}>¿Ya tienes cuenta? Inicia sesión</button>
      </form>
    </div>
  </div>
);

}

export default Registro;
