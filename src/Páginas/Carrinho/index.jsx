
import './estilos.css';
import http from '../../http';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const Carrinho = ({ produtos }) => {

    const history = useHistory();


    const finalizarCarrinho = () => {
        const pedido = {
            email: localStorage.getItem('user'),
            itens: [

            ]
        }

        produtos.forEach(item => {
            pedido.itens.push({
                quantidade: item.quantidade,
                codigoProduto: item.codigo
            })
        });

        console.log(pedido);

        http.post('pedido', pedido)
            .then(resposta => {
                console.log(resposta.data)
                history.push('/finalizar/' + resposta.data.numeroPedido)
            })
    }

    return (
        <div>
            <h1 className="titulo-carrinho">Carrinho</h1>
            <table className="table table-striped tabela-pedido">

                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Preço Unitário</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor total</th>
                    </tr>
                </thead>

                <tbody>{produtos.map((item) => <tr key={item.id}>
                    <td>{item.codigo}</td>
                    <td>{item.nome}</td>
                    <td>R${item.preco}</td>
                    <td>{item.quantidade}</td>
                    <td>R${(item.quantidade * item.preco).toFixed(2)}</td>
                </tr>)}</tbody>

            </table>
            <div className="container container-finalizar">
                <div>
                    <button onClick={finalizarCarrinho} className="btn btn-primary botao-finalizar-carrinho">Comprar</button>
                    <div>
                        <Link to="/produtos"><button className="btn btn-primary">Continuar comprando</button></Link>
                    </div>


                </div>
                </div>


            </div>)
            
}

            export default Carrinho;