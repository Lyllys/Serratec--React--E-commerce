import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from '../../../http';
import CardDetalhes from "../../../Componentes/CardDetalhes";

const DetalhesProduto = ({aoAdicionar}) => {

    const {nome} = useParams();

    const [produto, setProduto] = useState({});

    useEffect(() => {
        http.get(`produto/` + nome)
            .then(resposta => {
                setProduto(resposta.data)
            }).catch(erro =>
                console.log(erro))
    }, [nome])

    return (
        
        <CardDetalhes aoAdicionar={aoAdicionar}  nome={produto.nome} preco={produto.preco} descricao={produto.descricao} codigo={produto.codigo} imagem={produto.url}/>

    )
}

export default DetalhesProduto;