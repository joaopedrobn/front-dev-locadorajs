import React from 'react';

function formatBRL(v) {
  if (v == null) return '-';
  const n = typeof v === 'number' ? v : Number(String(v).replace(',', '.'));
  if (Number.isNaN(n)) return String(v);
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function FilmesTable({ filmes = [], alugaFilme }) {
  const rows = filmes.map(filme => (
    <tr key={filme.id}>
      <td className="text-center">{filme.nome}</td>
      <td className="text-center">{filme.genero}</td>
      <td className="text-center">{formatBRL(filme?.valor)}</td>
      <td className="text-center">{filme.status}</td>
      <td className="text-center">
        <button
          className="btn btn-success"
          title="Alugar Filme"
          onClick={() => alugaFilme?.(filme.id, filme.valor)}
          type="button"
        >
          <i className="pi pi-check" />
        </button>
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
            Valor
          </th>
          <th scope="col" className="text-center">
            Status
          </th>
          <th scope="col" className="text-center">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default FilmesTable;
