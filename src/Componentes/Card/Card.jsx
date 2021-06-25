import './estilos.css';
import { Link } from 'react-router-dom';

const Card = ({ nome, descricao, preco, imagem }) => {
  return (

   <div className="col-md-4 g-4">
     <div className="card h-100" >
      <img src={imagem} className="card-img-top img-fluid imagem-produto" alt="imagem do produto" />
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">{descricao}</p>
        <p className="card-text">R$ {preco}</p>
        <Link to={`/produto/${nome}`} className="btn btn-primary">Ver detalhes</Link>
      </div>
    </div>
   </div>
   
  )
}

export default Card;