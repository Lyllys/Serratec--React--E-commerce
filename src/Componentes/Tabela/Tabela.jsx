const Tabela = (props) => {
        console.log(props);
    
    return (
        props.itensPedido.map((item) => {
          return <h1>{item.nome}</h1>
        })
        
        )

}

export default Tabela;