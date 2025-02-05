import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate(); // Correção: usar useNavigate

    return (
        <div className="container text-center">
            <h2>Bem-vindo ao seu sistema de Locação de Filmes</h2>
            <br /> <br />
            <h4>Locadora</h4>
            <br /> <br />

            <div className="offset-md-4 col-md-4">
                <button 
                    style={{ width: '100%' }}
                    onClick={() => navigate('/home')} // Correção: usar navigate
                    className="btn btn-success btn-lg"
                >
                    <i className="pi pi-sign-in">&nbsp; Acessar</i>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
