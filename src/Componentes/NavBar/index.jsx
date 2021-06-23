import carrinho from '../../imagens/shopping-cart.png';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/produtos">Produtos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categorias">Categorias</Link>
        </li>
       
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/carrinho"><img src={carrinho} alt="carrinho de compras" /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cadastro">Cadastre-se</Link>
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
 
      )
}

export default Navbar;