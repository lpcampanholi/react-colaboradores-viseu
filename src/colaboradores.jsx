import { v4 as uuidv4 } from 'uuid';
import setoresInicial from './setores.jsx';

const colabInicial = [
  {
    id: uuidv4(),
    nome: "Iago Anibio",
    cargo: "Designer",
    imagem: "./img/iago.jpeg",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/iago-anibio-pimenta-a2a287172/",
    instagram: "https://www.instagram.com/iago_anibio/",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Barbara Elizabete",
    cargo: "Designer",
    imagem: "./img/barbara.jpeg",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/barbara-elizabete-soares-rodrigues-323466211/",
    instagram: "https://www.instagram.com/babi_eliza/",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Miriam Machado",
    cargo: "Copidesque",
    imagem: "./img/miriam.jpg",
    favorito: false,
    linkedin: "",
    instagram: "https://www.instagram.com/miriammachadoo_/",
    setor: setoresInicial[2].nome
  },
  {
    id: uuidv4(),
    nome: "Dilvo Rodrigues",
    cargo: "Estrategista de Marketing",
    imagem: "./img/dilvo.jpeg",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/dilvo-rodrigues/",
    instagram: "https://www.instagram.com/dilvorodrigues/",
    setor: setoresInicial[3].nome
  },
  {
    id: uuidv4(),
    nome: "Luís Campanholi",
    cargo: "Designer",
    imagem: "./img/luis.png",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/lu%C3%ADs-campanholi/",
    instagram: "https://www.instagram.com/lpcampanholi/",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Thiago Regina",
    cargo: "CEO",
    imagem: "./img/thiago.jpg",
    favorito: true,
    linkedin: "https://www.linkedin.com/in/thiagoregina/",
    instagram: "https://www.instagram.com/thiagodregina/",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Rodrigo Regina",
    cargo: "CEO",
    imagem: "./img/rodrigo-regina.jpeg",
    favorito: true,
    linkedin: "https://www.linkedin.com/in/rodrigo-regina-076091121/",
    instagram: "https://www.instagram.com/rodrigooregina/",
    setor: setoresInicial[1].nome
  },
  {
    id: uuidv4(),
    nome: "Rodrigo Millano",
    cargo: "Designer gráfico",
    imagem: "./img/rodrigo-capoya.jpeg",
    favorito: true,
    linkedin: "https://www.linkedin.com/in/rodrigo-millano-1608a0153/",
    instagram: "https://www.instagram.com/rodrigo_millano/",
    setor: setoresInicial[3].nome
  },
  {
    id: uuidv4(),
    nome: "Caique Ruiz",
    cargo: "Consultor Editorial",
    imagem: "./img/caique.jpg",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/caiquearuiz/",
    instagram: "https://www.instagram.com/seucaique/",
    setor: setoresInicial[1].nome
  },
  {
    id: uuidv4(),
    nome: "Maressa Campaner",
    cargo: "Recursos Humanos",
    imagem: "./img/maressa.png",
    favorito: true,
    linkedin: "https://www.linkedin.com/in/maressa-campaner-4451821b1/",
    instagram: "https://www.instagram.com/maressacampaner/",
    setor: setoresInicial[5].nome
  },
  {
    id: uuidv4(),
    nome: "Caroline Meira",
    cargo: "Atendimento",
    imagem: "./img/caroline-meira.jpg",
    favorito: false,
    linkedin: "",
    instagram: "https://www.instagram.com/caroldahora1998/",
    setor: setoresInicial[0].nome
  },
  {
    id: uuidv4(),
    nome: "Cleuza Santos",
    cargo: "Bibliotecária",
    imagem: "./img/cleuza.jpg",
    favorito: false,
    linkedin: "",
    instagram: "",
    setor: setoresInicial[4].nome
  },
  {
    id: uuidv4(),
    nome: "Beatriz Rodrigues",
    cargo: "Atendimento",
    imagem: "./img/beatriz.jpg",
    favorito: false,
    linkedin: "",
    instagram: "https://www.instagram.com/biahh_bentoo/",
    setor: setoresInicial[0].nome
  },
  {
    id: uuidv4(),
    nome: "Joice Bernardo",
    cargo: "Contadora",
    imagem: "./img/joice.jpeg",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/joice-bernardo-549896201/",
    instagram: "https://www.instagram.com/joice_bernardooficial/",
    setor: setoresInicial[5].nome
  },
  {
    id: uuidv4(),
    nome: "Daniel Estevam",
    cargo: "Atendimento",
    imagem: "./img/daniel.jpg",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/daniel-estevam-b63635297/",
    instagram: "https://www.instagram.com/daniel_estevam12/",
    setor: setoresInicial[0].nome
  },
  {
    id: uuidv4(),
    nome: "Vinícius Villa",
    cargo: "Copywriter",
    imagem: "./img/vinicius.jpeg",
    favorito: false,
    linkedin: "https://www.linkedin.com/in/vinicius-villa-93aa5aba/",
    instagram: "https://www.instagram.com/vinivilla89/",
    setor: setoresInicial[3].nome
  },
  {
    id: uuidv4(),
    nome: "Matheus Santos",
    cargo: "Coordenador",
    imagem: "./img/matheus.jpeg",
    favorito: true,
    linkedin: "https://www.linkedin.com/in/matheus-santos-bb88a2240/",
    instagram: "https://www.instagram.com/mthviinicius/",
    setor: setoresInicial[2].nome
  }
]

export default colabInicial;