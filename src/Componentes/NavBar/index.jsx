import carrinho from '../../imagens/shopping-cart.png';
import { Link } from 'react-router-dom';
import './estilos.css'
const Navbar = () => {

  return  (<ul className="nav justify-content-center navbar-menu">
  <li className="nav-item">
  <Link className="nav-link nav-link-menu" to="/produtos">Produtos</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link nav-link-menu" to="/categorias">Categorias</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link nav-link-menu" aria-current="page" to="/login">Login</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link nav-link-menu" aria-current="page" to="/cadastro">Cadastre-se</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link nav-link-menu" aria-current="page" to="/carrinho"><img src={carrinho} alt="carrinho de compras" /></Link>
  </li>
 
</ul>
 
      )
}

export default Navbar;