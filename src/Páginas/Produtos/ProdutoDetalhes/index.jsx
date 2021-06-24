import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from '../../../http';
import CardDetalhes from "../../../Componentes/CardDetalhes";

const DetalhesProduto = () => {

    const {nome } = useParams();

    const [produto, setProduto] = useState({});

    useEffect(() => {
        http.get(`produto/` + nome)
            .then(resposta => {
                setProduto(resposta.data)
            }).catch(erro =>
                console.log(erro))
    }, [nome])

    return (
        
        <CardDetalhes nome={produto.nome} preco={produto.preco} descricao={produto.descricao} />
        
        // <div className="container" >
        //     <div className="row">
        //         <div className="col-12 col-lg-6 texto-banner mt-3">
        //             <h1>{produto.nome}</h1>
        //             <p>{produto.preco}</p>
        //         </div>
        //         <div className="col-12 col-lg-6 ">
        //             {/* <img className="img-fluid" src={fotoBanner} alt="" /> */}
        //         </div>
        //     </div>
        // </div>
    )
}

export default DetalhesProduto;