import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Card from '../../components/Card';
import FilmesAlugadosTable from '../FilmesAlugadosTable';

function ListaFilmesAlugados() {
  const navigate = useNavigate();

  const [locacoes, setLocacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Para listar por cliente, use esta rota:
    // const userId = localStorage.getItem('userId');
    // const url = `/locacoes/cliente/${userId}`;
    const url = '/locacoes';

    api
      .get(url)
      .then(res => {
        console.log('Locações recebidas:', res.data);
        setLocacoes(Array.isArray(res.data) ? res.data : []);
      })
      .catch(err => {
        console.error('Erro ao buscar locações:', err);
        setLocacoes([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Card title="Consultar Filmes Alugados">
        {loading ? (
          <div className="text-center p-3">Carregando...</div>
        ) : locacoes.length === 0 ? (
          <div className="text-center p-3">Nenhuma locação encontrada.</div>
        ) : (
          <FilmesAlugadosTable locacoes={locacoes} />
        )}
      </Card>

      <button
        style={{ width: '100%' }}
        onClick={() => navigate('/cliente')}
        className="btn btn-danger btn-lg"
        type="button"
      >
        <i className="pi pi-sign-in" />
        &nbsp; Voltar
      </button>
    </>
  );
}

export default ListaFilmesAlugados;
