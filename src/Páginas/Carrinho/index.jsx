import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import http from '../../http';
import './estilos.css'
import Tabela from '../../Componentes/Tabela/Tabela';

const Carrinho = () => {

    const { nome, quantidade } = useParams();

    // const [itensPedido, setItensPedido] = useState([{
    //     produto: {
    //         id: 0,
    //         nome: '',
    //         descricao: '',
    //         preco: 0,
    //         categoria: {
    //             codigo: '',
    //             dataCadastro: '',
    //             descricao: '',
    //             id: 0,
    //             imagemBase64: null,
    //             nome: '',
    //             preco: 0,
    //             quantidadeEstoque: 0
    //         }
    //     }
    // }]);

    const [itensPedido, setItensPedido] = useState([]);

    useEffect(() => {
        http.get(`produto/` + nome)
            .then(resposta => {
                setItensPedido(resposta.data)
            }).catch(erro =>
                console.log(erro))
    }, [])
console.log(itensPedido);

    return (<div>
        <h1 className="titulo-carrinho">Carrinho</h1>
        <table className="table table-striped tabela-pedido">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>

{/* 
           {Object.entries(itensPedido).map((item) => <Tabela
                key={item.id}
                nome={item.nome}
                preco={item.preco}
            />)} */}

            {itensPedido ? <Tabela  itensPedidos={itensPedido} /> : ''}




        </table>
    </div>)
}

export default Carrinho;