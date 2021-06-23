import { Link } from "react-router-dom";
import logo from '../../imagens/logo.png'
import './estilos.css'

const Header = () =>{
    return <nav class="navbar fixed-top navbar-light bg-light navbar-logo">
    <div class="container-fluid justify-content-center">
          <Link className="navbar-brand nav-link" to="/"><img className="logo" src={logo} alt="logo" /></Link>
    </div>
  </nav>
}

export default Header;