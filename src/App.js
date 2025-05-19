// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './Pages/Registro.js';
import Login from './Pages/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
