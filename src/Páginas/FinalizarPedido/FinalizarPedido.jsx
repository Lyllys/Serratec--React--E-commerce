import { useState } from 'react';
import { useParams } from 'react-router-dom';
import http from '../../http';
import './estilos.css';



const FinalizarPedido = () => {

    const formaPagamento = ['BOLETO', 'CREDITO', 'DEBITO', 'PIX'];
    const [statusPedido] = useState(['FINALIZADO']);

    const finalizarPedido = (evento) => {
        evento.preventDefault()

        const pedido = {
            statusPedido,
            formaPagamento
        }

        formaPagamento.forEach(item => {
            pedido.formaPagamento.push({
                formaPagamento: item.formaPagamento
            })
        })

            http.post('pedido/finalizar/', pedido)
                .then(resposta => {
                    console.log(resposta);
                }
                ).catch(erro => {
                    console.log(erro);
                })
        }
    

    return (
            <div>
                <h1 className="titulo-finalizar-pedido">Finalizar Pedido</h1>
                <form onSubmit={finalizarPedido} className="container-pedido-finalizar">
                    <fieldset>
                        <div className="mb-3 finalizar-pedido">
                            <label className="form-label">Selecione a forma de pagamento</label>
                            <select value={formaPagamento} className="form-select">
                                <option>Selecione a forma de pagamento</option>
                                <option >PIX</option>
                                <option>Boleto</option>
                            </select>
                        </div>
                        <div className="finalizar-pedido">
                            <button type="submit" className="btn btn-primary">Finalizar pedido</button>
                        </div>
                    </fieldset >
                </form>
            </div>

        )
    }

    export default FinalizarPedido;