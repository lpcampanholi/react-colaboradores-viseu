import './Formulario.css';
import { useState } from 'react';
import Campo from "../Campo";
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';

function Formulario({ lista, aoAdicionarColaborador }) {

  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [imagem, setImagem] = useState();
  const [setor, setSetor] = useState();

  function aoSubmeter(e) {
    e.preventDefault();
    const novoColaborador = {
      nome,
      cargo,
      imagem,
      setor
    }
    aoAdicionarColaborador(novoColaborador)
    setNome('');
    setCargo('');
    setImagem('');
    setSetor('');
  }

  return (
    <section >
      <div className="formulario" >
        <h2>Preencha os campos para criar o card do colaborador.</h2>
        <form onSubmit={aoSubmeter}>
          <Campo
            tipo="text"
            nome="Nome"
            valor={nome}
            placeholder="Digite seu nome"
            obrigatorio
            aoAtualizar={e => setNome(e.target.value)}
          />
          <Campo
            tipo="text"
            nome="Cargo"
            valor={cargo}
            placeholder="Digite seu cargo"
            obrigatorio
            aoAtualizar={e => setCargo(e.target.value)}
          />
          <Campo
            tipo="text"
            nome="Imagem"
            valor={imagem}
            placeholder="Insira o endereço da imagem"
            aoAtualizar={e => setImagem(e.target.value)}
          />
          <ListaSuspensa
            nome="Setor"
            lista={lista}
            obrigatorio
            aoAtualizar={e => setSetor(e.target.value)}
          />
          <Botao>Criar card</Botao>
        </form>
      </div>
    </section>
  )
}

export default Formulario;