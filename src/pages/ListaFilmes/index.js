import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import FilmesTable from "../FilmesTable";

function ListaFilmes() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
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
      .get("/filmes/disponiveis", { params })
      .then((response) => {
        setFilmes(response.data);
        console.log(response.data);
        const lista = response.data;
        setState[{ ...state, filmes: lista }];
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <FilmesTable filmes={state.filmes} />
      {}
      <ul>
        {filmes.map((filme, index) => (
          <li key={index}>
            {filme.nome} - {filme.genero}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFilmes;
