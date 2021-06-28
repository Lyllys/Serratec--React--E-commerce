import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componentes/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Páginas/Home';
import Header from './Componentes/Header';
import Produtos from './Páginas/Produtos';
import Cadastro from './Páginas/Cadastro';
import Login from './Páginas/Login';
import ProdutoDetalhes from './Páginas/Produtos/ProdutoDetalhes';
import Rodape from './Componentes/Rodape/';
import Carrinho from './Páginas/Carrinho';
import Pagina404 from './Páginas/Pagina404/Pagina404';
import { useState } from 'react';

function App() {

  const [carrinho, setCarrinho] = useState([]);

  const adicionarProduto = (produtoAdiciona) => {
   console.log(produtoAdiciona);
   setCarrinho([
       ...carrinho,
      produtoAdiciona
     ]) 
  }

 
  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

return (
  <BrowserRouter>
    <Header />
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/produtos">
        <Produtos />
      </Route>
      <Route path="/produto/:nome">
        <ProdutoDetalhes aoAdicionar={adicionarProduto} />
      </Route>
      <Route path="/carrinho">
        <Carrinho produtos={carrinho} />
      </Route>  
      {/* <Route>
        <FinalizarPedido path="/finalizar"/>
      </Route> */}
      <Route exact path="/cadastro">
        <Cadastro />
      </Route>
      <Route exact path="/login">
        <Login onLogin={onLogin}/>
      </Route>
      <Route>
        <Pagina404 />
      </Route>
    </Switch>
    <Rodape />
  </BrowserRouter>
);
}

export default App;
