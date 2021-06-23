import carrinho from '../../imagens/shopping-cart.png';
import { Link } from 'react-router-dom';
import './estilos.css'
const Navbar = () => {

  return  (<ul class="nav justify-content-center navbar-menu">
  <li class="nav-item">
  <Link className="nav-link nav-link-menu" to="/produtos">Produtos</Link>
  </li>
  <li class="nav-item">
  <Link className="nav-link nav-link-menu" to="/categorias">Categorias</Link>
  </li>
  <li class="nav-item">
  <Link className="nav-link nav-link-menu" aria-current="page" to="/login">Login</Link>
  </li>
  <li class="nav-item">
  <Link className="nav-link nav-link-menu" aria-current="page" to="/cadastro">Cadastre-se</Link>
  </li>
  <li class="nav-item">
  <Link className="nav-link nav-link-menu" aria-current="page" to="/carrinho"><img src={carrinho} alt="carrinho de compras" /></Link>
  </li>
 
</ul>
 
      )
}

export default Navbar;