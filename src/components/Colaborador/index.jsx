import './Colaborador.css';
import { MdFavoriteBorder } from "react-icons/md";

function Colaborador({ cara }) {
  return (
    <div className="colaborador">
      <div>
        <img src={cara.imagem} alt={cara.nome} />
      </div>
      <div>
        <h3>{cara.nome}</h3>
        <span className='cargo'>{cara.cargo}</span>
        <div className='etiqueta'>{cara.setor}</div>
        <MdFavoriteBorder />
      </div>
    </div>
  )
}

export default Colaborador;