import './Campo.css';

function Campo({ tipo, nome, placeholder, obrigatorio = false, aoAtualizar }) {
  return (
    <div className="campo">
      <label htmlFor={nome}>{nome}</label>
      <input
        type={tipo}
        name={nome}
        id={nome}
        required={obrigatorio}
        placeholder={placeholder}
        onChange={aoAtualizar}
      />
    </div>
  )
}

export default Campo;