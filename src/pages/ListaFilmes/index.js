import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import FilmesTable from '../FilmesTable';
import Card from '../../components/Card';
import toastr from 'toastr';

function ListaFilmes() {
  const navigate = useNavigate();

  const [nome] = useState('');
  const [genero] = useState('');
  const [filmes, setFilmes] = useState([]);

  const dataHojeBR = () => {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const alugaFilme = async (id, valor) => {
    try {
      const idCliente = JSON.parse(localStorage.getItem('userId'));
      if (!idCliente) return;

      const payload = {
        cliente: { id: idCliente },
        filme: { id },
        valor,
        data: dataHojeBR(), // <<<<<<<<<<  ENVIE A DATA
      };

      await api.post('/locacoes', payload);
      toastr.success('Filme alugado com sucesso!');
      navigate('/cliente');
    } catch (erro) {
      console.error(
        'Erro ao alugar:',
        erro.response?.status,
        erro.response?.data
      );
      toastr.error(
        erro.response?.data?.message || 'Não foi possível alugar o filme.'
      );
    }
  };

  useEffect(() => {
    const params = { nome, genero };
    api
      .get('/filmes/disponiveis', { params })
      .then(response => {
        setFilmes(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => {
        console.error(error);
        setFilmes([]);
      });
  }, []); // se quiser reagir a nome/genero, inclua [nome, genero]

  return (
    <>
      <Card title="Consultar Filmes">
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <FilmesTable filmes={filmes} alugaFilme={alugaFilme} />
            </div>
          </div>
        </div>
      </Card>

      <button
        style={{ width: '100%' }}
        onClick={() => navigate('/cliente')}
        className="btn btn-danger btn-lg"
      >
        <i className="pi pi-sign-in" />
        &nbsp; Voltar
      </button>
    </>
  );
}

export default ListaFilmes;
