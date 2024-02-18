import './Campo.css';

function Campo({ tipo = 'text', valor, nome, placeholder, obrigatorio = false, aoAtualizar }) {
  return (
    <div className="campo">
      <label htmlFor={nome}>{nome}</label>
      <input className={`campo-${tipo}`}
        type={tipo}
        value={valor}
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