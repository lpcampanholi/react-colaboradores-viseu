import { v4 as uuidv4 } from 'uuid';
import setoresInicial from './setores.jsx';

const colabInicial = [
  {
    id: uuidv4(),
    nome: "Iago Anibio",
    cargo: "Designer",
    imagem: "./img/iago.jpeg",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Barbara Elizabete",
    cargo: "Designer",
    imagem: "./img/barbara.jpeg",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Miriam Machado",
    cargo: "Copidesque",
    imagem: "./img/miriam.jpg",
    setor: setoresInicial[2].nome
  },
  {
    id: uuidv4(),
    nome: "Dilvo Rodrigues",
    cargo: "Estrategista de Marketing",
    imagem: "./img/dilvo.jpeg",
    setor: setoresInicial[3].nome
  },
  {
    id: uuidv4(),
    nome: "Luís Campanholi",
    cargo: "Designer",
    imagem: "./img/luis.png",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Thiago Regina",
    cargo: "Coordenador",
    imagem: "./img/thiago.jpg",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Rodrigo Regina",
    cargo: "Coordenador",
    imagem: "./img/rodrigo-regina.jpeg",
    setor: setoresInicial[1].nome
  },
  {
    id: uuidv4(),
    nome: "Rodrigo Capoya",
    cargo: "Designer",
    imagem: "./img/rodrigo-capoya.jpeg",
    setor: setoresInicial[3].nome
  },
  {
    id: uuidv4(),
    nome: "Caique Ruiz",
    cargo: "Comercial",
    imagem: "./img/caique.jpg",
    setor: setoresInicial[1].nome
  },
  {
    id: uuidv4(),
    nome: "Maressa",
    cargo: "RH",
    imagem: "./img/maressa.jpeg",
    setor: setoresInicial[6].nome
  },
  {
    id: uuidv4(),
    nome: "Caroline Meira",
    cargo: "Atendimento",
    imagem: "./img/caroline-meira.jpg",
    setor: setoresInicial[0].nome
  },
  {
    id: uuidv4(),
    nome: "Cleuza Luca dos Santos",
    cargo: "Bibliotecária",
    imagem: "./img/cleuza.jpg",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Beatriz Bento",
    cargo: "Atendimento",
    imagem: "./img/beatriz.jpg",
    setor: setoresInicial[0].nome
  },
  {
    id: uuidv4(),
    nome: "Joice",
    cargo: "Contábil",
    imagem: "./img/beatriz.jpg",
    setor: setoresInicial[5].nome
  },
  {
    id: uuidv4(),
    nome: "Daniel Estevam",
    cargo: "Atendimento",
    imagem: "./img/daniel.jpg",
    setor: setoresInicial[0].nome
  }
]

export default colabInicial;