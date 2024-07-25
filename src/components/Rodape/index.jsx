import './Rodape.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Rodape() {

  const sizeIcons = 15;

  return (
    <footer className="rodape">
      <div>
        <span>Desenvolvido por <strong>lpcampanholi</strong></span>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/lu%C3%ADs-campanholi/" target="_blank" rel="noreferrer"><FaLinkedin size={sizeIcons} /></a>
        <a href="https://github.com/lpcampanholi" target="_blank" rel="noreferrer"><FaGithub size={sizeIcons} /></a>
      </div>
    </footer>
  );
}

export default Rodape;