import './Colaborador.css';
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

function Colaborador({ nome, cargo, imagem, setor, cor, aoExcluir, lista }) {
  return (
    <div className="colaborador">
      <div className="icon-fechar">
        <IoMdCloseCircle onClick={aoExcluir} />
      </div>

      <div className="colaborador-cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="colaborador-rodape">
        <h3>{nome}</h3>
        <p>{cargo}</p>
        <div className='etiqueta' style={{ backgroundColor: cor }}>{setor}</div>
      </div>
      <MdFavoriteBorder className='icon-heart' />
    </div>
  )
}

export default Colaborador;