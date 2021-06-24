import plutonitaCongelante from '../../imagens/plutonita-congelante.jpg';
import './estilos.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardDetalhes = ({ nome, preco, descricao}) => {

    const [quantidade , setQuantidade] = useState(1);

    return (
        <div className="container detalhes-produto" >
            <div className="row">
                <div className="col-12 col-lg-6 informacoes-produto mt-3">
                    <h1>{nome}</h1>
                    <p className="descricao">{descricao}</p>
                    <h4>R${preco}</h4>
                    <Link to={`/carrinho/${nome}/${quantidade}`}><button className="btn btn-primary botao-carrinho">Adicionar ao carrinho </button> </Link>
                </div>
                <div className="col-12 col-lg-6 ">
                    <img className="img-fluid" src={plutonitaCongelante} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardDetalhes;