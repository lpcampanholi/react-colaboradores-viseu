import './Setor.css';
import Colaborador from '../Colaborador';
import { useState } from 'react';

function Setor({ nome, colaboradores, corDestaque, corFundo, aoExcluir, lista }) {

  const [cor, setCor] = useState(corDestaque);

  function alteraCor(e) {
    setCor(e.target.value)
  }

  return (
    colaboradores.length > 0 &&
    <section className='setor' style={{ backgroundColor: corFundo }}>
      <h2 style={{ borderColor: cor }}>{nome}</h2>
      <input className="seletor-cor" type="color" value={corDestaque} onChange={alteraCor} />
      <div className="colaboradores-container">
        {colaboradores.map((colaborador => {
          return (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              setor={colaborador.setor}
              cor={cor}
              aoExcluir={aoExcluir}
              lista={lista}
            />
          )
        }))}
      </div>
    </section>
  )
}

export default Setor;