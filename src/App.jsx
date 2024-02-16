import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cabecalho from "./components/Cabecalho";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Setor from "./components/Setor";
import TituloSetores from './components/TituloSetores';

function App() {

  const [setores, setSetores] = useState([
    {
      id: uuidv4(),
      nome: 'Atendimento',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Comercial',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Editorial',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Marketing',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'Fechamento',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Financeiro',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'RH',
      cor: '#FF8A29',
    }
  ]);

  const colabInicial = [
    {
      id: uuidv4(),
      nome: "Alex Hiraga",
      cargo: "Web Designer",
      imagem: "https://github.com/alexhiraga.png",
      setor: setores[4].nome
    },
    {
      id: uuidv4(),
      nome: "Iago Anibio",
      cargo: "Web Designer",
      imagem: "https://media.licdn.com/dms/image/C4D03AQElxQlud38z6A/profile-displayphoto-shrink_400_400/0/1642478283369?e=1713398400&v=beta&t=OuXC6aFIAv_McTyV1KW7HEUrEubW6jnd3ztEdWuJAeM",
      setor: setores[4].nome
    },
    {
      id: uuidv4(),
      nome: "Barbara Elizabete",
      cargo: "Web Designer",
      imagem: "https://media.licdn.com/dms/image/C5603AQGMXY-gcpiKtw/profile-displayphoto-shrink_800_800/0/1652822595292?e=1713398400&v=beta&t=0Yeiv38NArLES-GfphRgWCQUsiYVBsVs8V-LVDUzhZc",
      setor: setores[4].nome
    },
    {
      id: uuidv4(),
      nome: "Miriam Machado",
      cargo: "Web Designer",
      imagem: "https://instagram.fmgf2-1.fna.fbcdn.net/v/t51.2885-19/297711786_5135124759950643_3395872280018801786_n.jpg",
      setor: setores[2].nome
    },
    {
      id: uuidv4(),
      nome: "José Bruno",
      cargo: "PHP Dev",
      imagem: "https://github.com/josebruno2020.png",
      setor: setores[1].nome
    },
    {
      id: uuidv4(),
      nome: "Luís Plinio",
      cargo: "Front-End",
      imagem: "https://github.com/lpcampanholi.png",
      setor: setores[0].nome
    },
    {
      id: uuidv4(),
      nome: "Kauê Cezario",
      cargo: "Cientista de Dados",
      imagem: "https://github.com/kcezario.png",
      setor: setores[0].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(colabInicial)

  function adicionarColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  }

  function alterarCorDoTime(cor, id) {
    setSetores(setores.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function excluirColaborador(id) {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))
    console.log('excluindo colaborador')
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
            key={setor.id}
            setor={setor}
            aoExcluir={excluirColaborador}
            mudarCor={alterarCorDoTime}
            colaboradores={colaboradores.filter((colaborador) => colaborador.setor === setor.nome)}
          />
        )
      })}
      <Rodape />
    </div>
  );
}

export default App;
