import './Colaborador.css';
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

function Colaborador({ nome, cargo, imagem, setor, cor }) {
  return (
    <div className="colaborador">
      <div className="icon-fechar">
        <IoMdCloseCircle />
      </div>

      <div className="colaborador-cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="colaborador-rodape">
        <h3>{nome}</h3>
        <p>{cargo}</p>
        <div className='etiqueta' style={{ backgroundColor: cor }}>{setor}</div>
        <MdFavoriteBorder />
      </div>
    </div>
  )
}

export default Colaborador;