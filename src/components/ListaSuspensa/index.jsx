import './ListaSuspensa.css';

function ListaSuspensa({ nome, lista, aoAtualizar }) {
  return (
    <div className="lista-suspensa">
      <label htmlFor={nome}>{nome}</label>
      <select name={nome} id={nome} onChange={aoAtualizar}>
        <option value=''>Selecione</option>
        {lista.map((elemento) => {
          return (
            <option value={elemento} key={elemento.toLowerCase()}>{elemento}</option>
          )
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa;