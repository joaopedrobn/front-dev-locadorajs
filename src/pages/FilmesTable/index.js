import React from "react";

function FilmesTable(props) {
  const rows = props.filmes.map((filme) => {
    return (
      <tr key={filme.id}>
        <td className="text-center">{filme.nome}</td>
        <td className="text-center">{filme.genero}</td>
        <td className="text-center">
          <div className="btn-group" role="group">
            <button
              className="btn btn-success mx-1"
              title="Alugar Filme"
              onClick={() => props.alugaFilme(filme.id)}
              type="button"
            >
              <i className="pi pi-check"></i>
            </button>
            <button
              className="btn btn-info mx-1"
              title="Ver Detalhes"
              onClick={() => props.detalhesFilme(filme.id)}
              type="button"
            >
              <i className="pi pi-info-circle"></i>
            </button>
            <button
              className="btn btn-warning mx-1"
              title="Ver Valor do Aluguel"
              onClick={() => props.valorAluguel(filme.id)}
              type="button"
            >
              <i className="pi pi-dollar"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover table-bordered shadow-sm rounded">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="text-center">Nome</th>
          <th scope="col" className="text-center">Gênero</th>
          <th scope="col" className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default FilmesTable;
