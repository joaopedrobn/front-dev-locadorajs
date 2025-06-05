import React from 'react';

function FilmesAlugadosTable(props) {
  const rows = props.filmes.map(filme => {
    return (
      <tr key={filme.id}>
        <td className="text-center">{filme.nome}</td>
        <td className="text-center">{filme.genero}</td>
      </tr>
    );
  });

  return (
    <table className="table table-hover table-bordered shadow-sm rounded">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="text-center">
            Nome
          </th>
          <th scope="col" className="text-center">
            Gênero
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default FilmesTable;
