import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cliente () {
    const Navigate = useNavigate();

return(
    <div className="container text-center" >
    <div className="offset-md-4 col-md-4">
        <button style={{ width: '100%' }}
            onClick={() => Navigate('/listafilmes')}
            className="btn btn-success btn-lg">
            <i className="pi pi-sign-in"></i> &nbsp; Alugar filmes
        </button>
        <br/><br></br>
        <button style={{ width: '100%' }}
            onClick={() => Navigate('/listafilmesAlugados')}
            className="btn btn-info btn-lg">
            <i className="pi pi-sign-in"></i> &nbsp; Filmes alugados
        </button>
        <br/><br></br>
        <button style={{ width: '100%' }}
            onClick={() => Navigate('/login')}
            className="btn btn-danger btn-lg">
            <i className="pi pi-sign-out"></i> &nbsp; Sair
        </button>
    </div>
</div>
);

}

export default Cliente;