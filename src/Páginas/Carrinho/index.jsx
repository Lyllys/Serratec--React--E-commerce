// import './estilos.css'
// import { useState } from 'react'
// import http from '../../http'

// const Carrinho = () => {

//     const [carrinhos, setCarrinhos] = useState([]);
//     const adicionarProduto = (produtoAdiciona) => {

//         http.post(`pedido`, produtoAdiciona)
//             .then(resposta => {
//                 const novoCarrinho = resposta.data;
//                 setCarrinhos([
//                     novoCarrinho,
//                     ...carrinhos
//                 ])
//             }).catch(erro => {
//                 console.log(erro);
//             })
//     }

//     return (<div>
//         <h1 className="titulo-carrinho">Carrinho</h1>
//         <table className="table table-striped tabela-pedido">
//             <thead>
//                 <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Produto</th>
//                     <th scope="col">Preço</th>
//                     <th scope="col">Quantidade</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {carrinhos.map((produto) => <tr key={produto.id}> 
//                     <td>{produto.nome}</td>
//                     <td>{produto.preco}</td>
//                 </tr>)}

//             </tbody>
//         </table>
//     </div>)
// }

// export default Carrinho;