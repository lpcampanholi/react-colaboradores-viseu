import './Setor.css';
import Colaborador from '../Colaborador';

function Setor({ nome, colaboradores, corDestaque, corFundo }) {
  return (
    colaboradores.length > 0 &&
    <section className='setor' style={{ backgroundColor: corFundo }}>
      <h2 style={{ borderColor: corDestaque }}>{nome}</h2>
      <input className="seletor-cor" type="color" value={corDestaque} />
      <div className="colaboradores-container">
        {colaboradores.map((colaborador => {
          return (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              setor={colaborador.setor}
              cor={corDestaque}
            />
          )
        }))}
      </div>
    </section>
  )
}

export default Setor;