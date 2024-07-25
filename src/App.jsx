import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Cabecalho from "./components/Cabecalho"
import Formularios from "./components/Formularios/index.jsx"
import Rodape from "./components/Rodape"
import Setor from "./components/Setor"
import TituloSetores from './components/TituloSetores'
import setoresInicial from './Dados/setores.jsx'
import { colabInicial } from './Dados/colaboradores.jsx'

function App() {

  const [setores, setSetores] = useState(setoresInicial)
  const [colaboradores, setColaboradores] = useState(colabInicial)

  function adicionarColaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  function adicionarSetor(novoSetor) {
    setSetores([...setores, { ...novoSetor, id: uuidv4() }])
  }

  function alterarCorDoSetor(cor, id) {
    setSetores(setores.map((time) => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function excluirColaborador(id) {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))
  }

  function favoritarColaborador(id) {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }

  function mudaDeSetor(id, novoSetor) {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.setor = novoSetor
      }
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Cabecalho />
      <Formularios
        lista={setores}
        aoAdicionarColaborador={adicionarColaborador}
        aoAdicionarSetor={adicionarSetor}
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
            setores={setores}
            mudaDeSetor={mudaDeSetor}
          />
        )
      })}
      <Rodape />
    </div>
  )
}

export default App
