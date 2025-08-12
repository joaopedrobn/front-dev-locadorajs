import React from 'react';

function FilmesAlugadosTable({ locacoes = [], devolveFilme }) {
  const rows = locacoes.map(loc => (
    <tr key={loc.id}>
      <td className="text-center">{loc.filme?.nome ?? '-'}</td>
      <td className="text-center">{loc.filme?.genero ?? '-'}</td>
      <td className="text-center">{loc.data ?? '-'} (2 dias para devolução)</td>
      <td className="text-center">{loc.valor ?? '-'}</td>
      <td className="text-center">{loc.status ?? '-'}</td>

      {/* Mantém a coluna sempre presente para não desalinha a tabela */}
      <td className="text-center">
        {loc.status === 'Alugado' && (
          <button
            className="btn btn-success"
            title="Devolver"
            onClick={() => devolveFilme?.(loc.id)}
            type="button"
          >
            <i className="pi pi-check" />
          </button>
        )}
      </td>
    </tr>
  ));

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
          <th scope="col" className="text-center">
            Data
          </th>
          <th scope="col" className="text-center">
            Valor
          </th>
          <th scope="col" className="text-center">
            Status
          </th>
          <th scope="col" className="text-center">
            Devolver Filme
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default FilmesAlugadosTable;
