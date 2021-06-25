import './estilos.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardDetalhes = ({ nome, preco, descricao, aoAdicionar, codigo, imagem }) => {

    const [quantidade, setQuantidade] = useState(1);

    const adicionar = () => {
        aoAdicionar({
            nome,
            preco,
            descricao,
            quantidade,
            codigo
        });
    }

    return (
        <div className="container detalhes-produto" >
            <div className="row">
                <div className="col-12 col-lg-6 informacoes-produto mt-3">
                    <h1>{nome}</h1>
                    <p className="descricao">{descricao}</p>
                    <h4>R${preco}</h4>
                    <input value={quantidade} onChange={(evento) => setQuantidade(evento.target.value)} type="number" />
                    <button onClick={adicionar} className="btn btn-primary botao-carrinho">Adicionar ao carrinho </button>
                    <div>
                        <Link to="/carrinho"><button className="btn btn-primary botao-carrinho">Ir para o carrinho</button></Link>
                    </div>
                </div>
                <div className="col-12 col-lg-6 ">
                    <img className="img-fluid" src={imagem} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardDetalhes;