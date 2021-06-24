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
import http from './http';
import { useState } from 'react';


function App() {

  const [carrinho, setCarrinho] = useState([]);

  const adicionarProduto = (produtoAdiciona) => {
   console.log(produtoAdiciona);
    // setCarrinho([
    //   carrinho,
    //   ...produtoAdiciona
    // ]) 
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
      {/* <Route exact path="/categorias">
        <Servicos />
      </Route> */}
      <Route path="/carrinho/:nome/:quantidade">
        <Carrinho />
      </Route>  
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
    <Rodape />
  </BrowserRouter>
);
}

export default App;
