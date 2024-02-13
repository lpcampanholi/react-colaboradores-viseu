import './EtiquetaSetores.css';

function EtiquetaSetores({ setores, cor, setor }) {
  return (
    <select name="" id="" className='etiqueta-setores' style={{ backgroundColor: cor }}>
      <option value={setor}>{setor}</option>
      {setores.map(setor => <option value={setor.nome} key={setor.nome}>{setor.nome}</option>)}
    </select>
  )
}

export default EtiquetaSetores;