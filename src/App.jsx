import { useState } from 'react';
import Cabecalho from "./components/Cabecalho";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Setor from "./components/Setor";

function App() {

  const setores = [
    'Atendimento',
    'Comercial',
    'Editorial',
    'Marketing',
    'Fechamento',
    'Financeiro',
    'RH'
  ]

  const inicial = [
    {
      nome: "Luís Plinio",
      cargo: "Designer",
      imagem: "https://github.com/lpcampanholi.png",
      setor: "Fechamento"
    }
  ]


  const [colaboradores, setColaboradores] = useState(inicial)

  return (
    <div className="App">
      <Cabecalho />
      <Formulario
        lista={setores}
      />

      <h3 style={{ fontFamily: 'Prata', fontWeight: '400', textAlign: 'center' }}>Setores</h3>

      {setores.map(elemento => <Setor nome={elemento} key={elemento} />)}
      <Rodape />
    </div>
  );
}

export default App;
