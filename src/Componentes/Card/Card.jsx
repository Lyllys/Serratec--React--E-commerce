import './estilos.css';
import { Link } from 'react-router-dom';

const Card = ({nome , descricao , preco}) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{nome}</h5>
              <p className="card-text">{descricao}</p>
              <p className="card-text">R$ {preco}</p>
              <Link to={`/produto/${nome}`}className="btn btn-primary">Ver detalhes</Link>  
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;