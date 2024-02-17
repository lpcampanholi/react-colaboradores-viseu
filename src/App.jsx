import { useState } from 'react';
import Cabecalho from "./components/Cabecalho";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Setor from "./components/Setor";
import TituloSetores from './components/TituloSetores';
import colabInicial from './colaboradores.jsx';
import setoresInicial from './setores.jsx';

function App() {

  const [setores, setSetores] = useState(setoresInicial);

  const [colaboradores, setColaboradores] = useState(colabInicial);

  function adicionarColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  }

  function alterarCorDoSetor(cor, id) {
    setSetores(setores.map((time) => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function excluirColaborador(id) {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))
  }

  function favoritarColaborador(id) {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        return { ...colaborador, favorito: !colaborador.favorito };
      }
      return colaborador;
    }))
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
            mudarCor={alterarCorDoSetor}
            favoritar={favoritarColaborador}
            colaboradores={colaboradores.filter((colaborador) => colaborador.setor === setor.nome)}
          />
        )
      })}
      <Rodape />
    </div>
  );
}

export default App;
