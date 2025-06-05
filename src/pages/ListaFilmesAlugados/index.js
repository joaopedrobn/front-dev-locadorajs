import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Card from '../../components/Card';
import FilmesAlugadosTable from '../FilmesAlugadosTable';

function ListaFilmes() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [state, setState] = useState({
    filmes: [],
  });

  useEffect(() => {
    const params = {
      nome: nome,
      genero: genero,
    };

    api
      .get('/filmes/disponiveis', { params })
      .then(response => {
        setFilmes(response.data[''].filme);
        console.log(response.data[''].filme);
        //console.log(response.data[0].filme);
        const lista = response.data[''].filme;
        setState[{ ...state, filmes: lista }];
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Card title="Consultar Filmes">
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <FilmesAlugadosTable filmes={state.filmes} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ListaFilmesAlugados;
