import plutonitaCongelante from '../../imagens/plutonita-congelante.jpg';
import './estilos.css';
import { Link } from 'react-router-dom';
import http from '../../http'
const CardDetalhes = ({ nome, preco, descricao }) => {

    const adicionarProduto = (evento) => {
        evento.preventDefault()
        // const pedido = {
        //    nome: nome,
        //   preco: preco
        // }

        const pedido = {
            email: "jose@gmail.com",
            itens: [
                {
                    codigoProduto: "PD001",
                    quantidade: 5
                }
            ]
        }

        console.log(pedido);


        http.post('pedido', pedido)
            .then(response => {
                console.log(response.data)
            })
            .catch(erro => {
                console.log('Algo deu errado')
                console.log(erro)
            })
    }

    return (
        <div className="container detalhes-produto" >
            <div className="row">
                <div className="col-12 col-lg-6 informacoes-produto mt-3">
                    <h1>{nome}</h1>
                    <p className="descricao">{descricao}</p>
                    <h4>R${preco}</h4>
                    <Link to="/carrinho"><button onClick={adicionarProduto} className="btn btn-primary botao-carrinho">Adicionar ao carrinho  </button> </Link>
                </div>
                <div className="col-12 col-lg-6 ">
                    <img className="img-fluid" src={plutonitaCongelante} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardDetalhes;