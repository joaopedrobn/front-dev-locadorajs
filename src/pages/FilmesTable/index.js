import React from "react";

function FilmesTable(props) {
  const rows = props.filmes.map((filme) => {
    return (
      <tr key={filme.id}>
        <td>{filme.nome}</td>
        <td>{filme.genero}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Gênero</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default FilmesTable;
