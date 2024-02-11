import './Rodape.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Rodape() {

  const sizeIcons = 25;

  return (
    <footer className="rodape">
      <span>Desenvolvido por: <strong>lpcampanholi</strong></span>
      <div className="social-media">
        <a href="https://www.instagram.com/lpcampanholi/" target="_blank" rel="noreferrer"><FaInstagram size={sizeIcons} /></a>
        <a href="https://www.linkedin.com/in/lu%C3%ADs-campanholi/" target="_blank" rel="noreferrer"><FaLinkedin size={sizeIcons} /></a>
        <a href="https://github.com/lpcampanholi" target="_blank" rel="noreferrer"><FaGithub size={sizeIcons} /></a>
      </div>
    </footer>
  );
}

export default Rodape;