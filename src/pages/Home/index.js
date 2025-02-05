import React from 'react';
import { useNavigate } from 'react-router-dom'; // Substituindo useHistory por useNavigate

function Home() {
  const navigate = useNavigate(); // Correção: usando useNavigate no lugar de useHistory

  return (
    <div className="container text-center">
      <div className="offset-md-4 col-md-4">
        {/* Botão para Login */}
        <button
          style={{ width: '100%' }}
          onClick={() => navigate('/login')} // Correção: usar navigate em vez de history.push
          className="btn btn-success btn-lg"
        >
          <i className="pi pi-sign-in"></i>&nbsp; Login
        </button>
        <br /><br />
  
        {/* Botão para Home */}
        <button
          style={{ width: '100%' }}
          onClick={() => navigate('/home')} // Correção: usar navigate em vez de history.push
          className="btn btn-info btn-lg"
        >
          <i className="pi pi-sign-in"></i>&nbsp; Home
        </button>
        <br /><br />
  
        {/* Botão para Voltar */}
        <button
          style={{ width: '100%' }}
          onClick={() => navigate('/')} // Correção: usar navigate em vez de history.push
          className="btn btn-danger btn-lg"
        >
          <i className="pi pi-sign-in"></i>&nbsp; Voltar
        </button>
      </div>
    </div>
  );
}

export default Home;
