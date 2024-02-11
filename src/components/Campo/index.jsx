import './Campo.css';

function Campo({ tipo, nome, obrigatorio = false }) {

  const placeholder = `Digite seu ${nome}`;

  return (
    <div className="campo">
      <label htmlFor={nome}>{nome}</label>
      <input
        type={tipo}
        name={nome}
        id={nome}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Campo;