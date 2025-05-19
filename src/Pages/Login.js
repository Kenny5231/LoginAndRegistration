// src/pages/Login.js
import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login-background">
      <div className="login-card">
        
        <h2>INICIAR SESIÓN</h2>

        <input type="text" placeholder="Usuario" className="login-input" />
        <input type="password" placeholder="Contraseña" className="login-input" />

        <button className="login-button">Ingresar</button>

        <p className="login-version">Versión 1.1.0</p>
      </div>
    </div>
  );
}
