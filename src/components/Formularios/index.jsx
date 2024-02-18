import './Formulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Campo from "../Campo";
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';

function Formularios({ lista, aoAdicionarColaborador, aoAdicionarSetor }) {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [imagem, setImagem] = useState('');
  const [setor, setSetor] = useState('');

  const [nomeSetor, setNomeSetor] = useState();
  const [corSetor, setCorSetor] = useState('#FF8A29');

  function aoSubmeterColaborador(e) {
    e.preventDefault();
    const novoColaborador = {
      id: uuidv4(),
      nome: nome,
      cargo: cargo,
      linkedin: linkedin,
      instagram: instagram,
      imagem: imagem,
      setor: setor
    }
    aoAdicionarColaborador(novoColaborador)
    setNome('');
    setCargo('');
    setImagem('');
    setSetor('');
    setImagem('');
    setSetor('');
  }

  function aoSubmeterSetor(e) {
    e.preventDefault();
    aoAdicionarSetor({ nome: nomeSetor, cor: corSetor });
    setNomeSetor('');
    setCorSetor('');
    alert("Setor Cadastrado!")
  }

  return (
    <section >
      <div className="formulario" >
        <h2>Preencha os campos para criar o card do colaborador.</h2>
        <form onSubmit={aoSubmeterColaborador}>
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
            nome="Linkedin"
            valor={linkedin}
            placeholder="Insira o endereço do Linkedin"
            aoAtualizar={e => setLinkedin(e.target.value)}
          />
          <Campo
            tipo="text"
            nome="Instagram"
            valor={instagram}
            placeholder="Insira o endereço do Instagram"
            aoAtualizar={valor => setInstagram(valor)}
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

      <div className="formulario" >
        <h2>Preencha os campos para criar um novo setor.</h2>
        <form onSubmit={aoSubmeterSetor}>
          <Campo
            tipo="text"
            nome="Nome do Setor"
            valor={nomeSetor}
            placeholder="Digite o nome do setor"
            obrigatorio
            aoAtualizar={e => setNomeSetor(e.target.value)}
          />
          <Campo
            className="campo-cor"
            tipo="color"
            nome="Cor do Setor"
            valor={corSetor}
            obrigatorio
            aoAtualizar={e => setCorSetor(e.target.value)}
          />
          <Botao>Criar setor</Botao>
        </form>
      </div>

    </section>
  )
}

export default Formularios;