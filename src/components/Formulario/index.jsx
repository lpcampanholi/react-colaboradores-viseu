import './Formulario.css';
import Campo from "../Campo";
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';

function Formulario() {
  return (
    <section className="formulario">
      <h2>Preencha os campos para criar o card do colaborador.</h2>
      <form>
        <Campo
          tipo="text"
          nome="Nome"
          obrigatorio={true}
        />
        <Campo
          tipo="text"
          nome="Cargo"
          obrigatorio={true}
        />
        <ListaSuspensa />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario;