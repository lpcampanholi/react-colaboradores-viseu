import './Formulario.css';
import { useState } from 'react';
import Campo from "../Campo";
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';

function Formulario({ lista }) {

  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [imagem, setImagem] = useState();
  const [setor, setSetor] = useState();

  const colaborador = {
    nome,
    cargo,
    imagem,
    setor
  }

  function aoSubmeter(e) {
    e.preventDefault();

  }

  return (
    <section className="formulario">
      <h2>Preencha os campos para criar o card do colaborador.</h2>
      <form onSubmit={aoSubmeter}>
        <Campo
          tipo="text"
          nome="Nome"
          placeholder="Digite seu nome"
          obrigatorio={true}
          aoAtualizar={e => setNome(e.target.value)}
        />
        <Campo
          tipo="text"
          nome="Cargo"
          placeholder="Digite seu cargo"
          obrigatorio={true}
          aoAtualizar={e => setCargo(e.target.value)}
        />
        <Campo
          tipo="text"
          nome="Imagem"
          placeholder="Insira o endereço da imagem"
          aoAtualizar={e => setImagem(e.target.value)}
        />
        <ListaSuspensa
          nome="Setor"
          lista={lista}
          aoAtualizar={e => setSetor(e.target.value)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario;