import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cabecalho from "./components/Cabecalho";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Setor from "./components/Setor";
import TituloSetores from './components/TituloSetores';

function App() {

  const setores = [
    {
      nome: 'Atendimento',
      id: uuidv4(),
      corDestaque: '#57C278',
      corFundo: '#D9F7E9'
    },
    {
      nome: 'Comercial',
      id: uuidv4(),
      corDestaque: '#82CFFA',
      corFundo: '#E8F8FF'
    },
    {
      nome: 'Editorial',
      id: uuidv4(),
      corDestaque: '#A6D157',
      corFundo: '#F0F8E2'
    },
    {
      nome: 'Marketing',
      id: uuidv4(),
      corDestaque: '#E06B69',
      corFundo: '#FDE7E8'
    },
    {
      nome: 'Fechamento',
      id: uuidv4(),
      corDestaque: '#DB6EBF',
      corFundo: '#FAE9F5'
    },
    {
      nome: 'Financeiro',
      id: uuidv4(),
      corDestaque: '#FFBA05',
      corFundo: '#FFF5D9'
    },
    {
      nome: 'RH',
      id: uuidv4(),
      corDestaque: '#FF8A29',
      corFundo: '#FFEEDF'
    }
  ]

  const colabInicial = [
    {
      nome: "Alex Hiraga",
      cargo: "Web Designer",
      imagem: "https://github.com/alexhiraga.png",
      setor: setores[4].nome
    },
    {
      nome: "José Bruno",
      cargo: "PHP Dev",
      imagem: "https://github.com/josebruno2020.png",
      setor: setores[1].nome
    },
    {
      nome: "Luís Plinio",
      cargo: "Front-End",
      imagem: "https://github.com/lpcampanholi.png",
      setor: setores[0].nome
    },
    {
      nome: "Kauê Cezario",
      cargo: "Cientista de Dados",
      imagem: "https://github.com/kcezario.png",
      setor: setores[0].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState([...colabInicial])

  function adicionarColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  function excluirColaborador(e) {
    // if
  }

  return (
    <div className="App">
      <Cabecalho />
      <Formulario
        lista={setores}
        aoAdicionarColaborador={adicionarColaborador}
      />
      <TituloSetores />

      {setores.map((setor) => {
        return (
          <Setor
            key={setor.nome}
            nome={setor.nome}
            corDestaque={setor.corDestaque}
            corFundo={setor.corFundo}
            colaboradores={colaboradores.filter((colaborador) => colaborador.setor === setor.nome)}
            aoExcluir={excluirColaborador}
            lista={setores}
          />
        )
      })}
      <Rodape />
    </div>
  );
}

export default App;
