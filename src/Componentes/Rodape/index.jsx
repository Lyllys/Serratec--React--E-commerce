import { FaHeart } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { RiGithubLine} from "react-icons/ri";
import {ImPinterest2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import './estilos.css'

const Rodape = () => {
    

  return ( 
   
    <footer className="footer">
    <div className="footersocial">
      <a href="/#">
        <FaInstagram size="40"  color="#000"/>
      </a>
      <a href="/#">
        <FiFacebook size="40"  color="#000"/>
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/Lyllys/Serratec--React--E-commerce">
        <RiGithubLine size="40"  color="#000"/>
      </a>
      <a href="/#">
        <FiTwitter size="40"  color="#000"/>
      </a>
      <a href="/#">
        <ImPinterest2 size="40"  color="#000"/>
      </a>
    </div>
    <p className="footercopyright">Made with <FaHeart color="#DF5E88"/> by Unicórnio Candy</p>
  </footer>
    )
      
    
}

export default Rodape;