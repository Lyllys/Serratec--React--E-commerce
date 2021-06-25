
import './estilos.css'


const Carrinho = ({ produtos }) => {
 

    return (<div>
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
    </div>)
}

export default Carrinho;