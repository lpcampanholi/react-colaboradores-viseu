import './Setor.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

function Setor({ setor, colaboradores, aoExcluir, mudarCor, favoritar }) {

  return (
    colaboradores.length > 0 &&
    <section className='setor' style={{ backgroundColor: hexToRgba(setor.cor, '0.15') }}>
      <h2 style={{ borderColor: setor.cor }}>{setor.nome}</h2>
      <input className="seletor-cor" type="color" value={setor.cor} onChange={(e) => mudarCor(e.target.value, setor.id)} />
      <div className="colaboradores-container">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              key={colaborador.id}
              colaborador={colaborador}
              cor={setor.cor}
              aoExcluir={aoExcluir}
              favoritar={favoritar}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Setor;