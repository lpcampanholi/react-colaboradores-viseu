import './Colaborador.css';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function Colaborador({ colaborador, cor, aoExcluir, favoritar }) {
  return (
    <div className="colaborador">

      <div className="icon-fechar">
        <IoMdCloseCircle onClick={() => aoExcluir(colaborador.id)} />
      </div>

      <div className="colaborador-cabecalho" style={{ backgroundColor: cor }}>
        <img src={colaborador.imagem} alt={`Imagem${colaborador.nome}`} />
      </div>

      <div className="colaborador-rodape">
        <h3>{colaborador.nome}</h3>
        <p>{colaborador.cargo}</p>

        <div className='etiqueta' style={{ backgroundColor: cor }}>
          {colaborador.setor}
        </div>

        <div className="icones">
          {colaborador.favorito ?
            <MdFavorite className="icon-heart icon-heart-red" onClick={() => favoritar(colaborador.id)} />
            : <MdFavoriteBorder className="icon-heart-outline" onClick={() => favoritar(colaborador.id)} />
          }
          {(colaborador.linkedin !== '') && <a href={colaborador.linkedin} target="_blank" rel="noreferrer"><FaLinkedin className='social-media' /></a>}
          {(colaborador.instagram !== '') && <a href={colaborador.instagram} target="_blank" rel="noreferrer"><FaInstagram className='social-media' /></a>}
        </div>

      </div>


    </div>
  )
}

export default Colaborador;