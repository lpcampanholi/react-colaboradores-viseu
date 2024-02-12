import './ListaSuspensa.css';

function ListaSuspensa({ nome, lista, obrigatorio, aoAtualizar }) {
  return (
    <div className="lista-suspensa">
      <label htmlFor={nome}>{nome}</label>
      <select name={nome} id={nome} onChange={aoAtualizar} required={obrigatorio}>
        <option value=''>Selecione</option>
        {lista.map((elemento) => {
          return (
            <option value={elemento.nome} key={elemento.nome}>{elemento.nome}</option>
          )
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa;