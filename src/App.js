import './App.css';
import Navbar from './Componentes/NavBar';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Home from './Páginas/Home';
import Header from './Componentes/Header';
import Produtos from './Páginas/Produtos';


function App() {
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
      {/* <Route exact path="/categorias">
        <Servicos />
      </Route>
      <Route path="/login">
        <Cadastro />
      </Route>
      <Route path="/cadastro">
        <Login />
      </Route>  */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
