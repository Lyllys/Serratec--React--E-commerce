import { useEffect, useState } from 'react';
import http from '../../http';
import Card from '../../Componentes/Card/Card';
import './estilos.css';

const Produtos = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    http.get('produto/todos')
    .then (resposta => {
      setProdutos(resposta.data)
    }).catch(erro =>{
      console.log(erro);
    })
  } , [])

    return (
       <div className="container container-produtos">
         <div className="row">
         {produtos.map((item) => <Card 
        key={item.id}
        id={item.id}
        codigo={item.codigo}
        nome={item.nome}
        preco={item.preco}
        descricao={item.descricao}  
        imagem={item.url}
       /> )}
         </div>
       </div>
    )
}

export default Produtos;