import './Colaborador.css';
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

function Colaborador({ colaborador, cor, aoExcluir }) {
  return (
    <div className="colaborador">
      <div className="icon-fechar">
        <IoMdCloseCircle
          onClick={() => aoExcluir(colaborador.id)}
        />
      </div>

      <div className="colaborador-cabecalho" style={{ backgroundColor: cor }}>
        <img src={colaborador.imagem} alt={`Imagem do colaborador '${colaborador.nome}'`} />
      </div>

      <div className="colaborador-rodape">
        <h3>{colaborador.nome}</h3>
        <p>{colaborador.cargo}</p>
        <div className='etiqueta' style={{ backgroundColor: cor }}>{colaborador.setor}</div>
      </div>
      <MdFavoriteBorder className='icon-heart' />
    </div>
  )
}

export default Colaborador;