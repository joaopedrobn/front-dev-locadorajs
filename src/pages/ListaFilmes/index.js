import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import FilmesTable from "../FilmesTable";
import Card from '../../components/Card';

function ListaFilmes() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [filmes, setFilmes] = useState([]);

  const alugaFilme = () => {
    console.log('Aluga Filme');
  };

  const detalhesFilme = () => {
    console.log('Detalhes Filme');
  };

  const valorAluguel = () => {
    console.log('Valor do Aluguel');
  };

  useEffect(() => {
    const params = {
      nome: nome,
      genero: genero,
    };

    api
      .get("/filmes/disponiveis", { params })
      .then((response) => {
        setFilmes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card title="Consultar Filmes">
      <div className='row'>
        <div className='col-md-12'>
          <div className='bs-component'>
            <FilmesTable
              filmes={filmes}
              alugaFilme={alugaFilme}
              detalhesFilme={detalhesFilme}
              valorAluguel={valorAluguel}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ListaFilmes;
