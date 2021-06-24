import { useState } from "react";
import axios from "axios";
import './estilos.css'
const Cadastro = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');


  const obterCep = (evento) => {
    if (!evento.target.value) {
      return;
    }
    const url = `https://viacep.com.br/ws/${evento.target.value}/json/`;
    axios
      .get(url)
      .then((response) => {
        if (!response.data.erro) {
          setRua(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
          setUf(response.data.uf);
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const cadastrar = (evento) => {
    evento.preventDefault();
    const usuarioCompleto = {
      nome: nome,
      email: email,
      username: username,
      senha: senha,
      cpf: cpf,
      dataNascimento: dataNascimento,
      telefone: telefone,
      endereco: {
        cep: cep,
        rua: rua,
        numeroResidencia: numero,
        bairro: bairro,
        cidade: cidade,
        uf: uf
      }
    }

    axios.post('http://localhost:8080/cliente', usuarioCompleto)
      .then((resposta) => {
        console.log(resposta.data)
        setNome('');
        setEmail('');
        setUsername('');
        setSenha('');
        setCpf('');
        setDataNascimento('');
        setTelefone('');
        setCep('');
        setRua('');
        setNumero('');
        setComplemento('');
        setBairro('');
        setCidade('');
        setUf('');


      })
      .catch(erro => console.log(erro))

    console.log(usuarioCompleto);

  };



  return (
    <form onSubmit={cadastrar} className="row g-3 formulario-cadastro ">
      <div className="col-md-6">
        <label className="form-label">Username</label>
        <input required minLength="5" value={username} onChange={(evento) => setUsername(evento.target.value)} className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input required minLength="8" value={senha} onChange={(evento) => setSenha(evento.target.value)} type="password" className="form-control" id="inputPassword4" />
      </div>
      <div className="col-12">
        <label className="form-label">Nome Completo</label>
        <input required value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-md-4">
        <label className="form-label">CPF</label>
        <input required maxLength="11" value={cpf} onChange={(evento) => setCpf(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-md-4">
        <label className="form-label">Data de Nascimento</label>
        <input required value={dataNascimento} onChange={(evento) => setDataNascimento(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-md-4">
        <label className="form-label">Telefone</label>
        <input required value={telefone} onChange={(evento) => setTelefone(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-12">
        <label className="form-label">Email</label>
        <input required value={email} onChange={(evento) => setEmail(evento.target.value)} type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-4">
        <label className="form-label">CEP</label>
        <input required maxLength="8" onBlur={obterCep} value={cep} onChange={(evento) => setCep(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-8">
        <label className="form-label">Rua</label>
        <input required value={rua} onChange={(evento) => setRua(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-8">
        <label className="form-label">Bairro</label>
        <input required value={bairro} onChange={(evento) => setBairro(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-4">
        <label className="form-label">Número</label>
        <input required value={numero} onChange={(evento) => setNumero(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-12">
        <label className="form-label">Complemento</label>
        <input required value={complemento} onChange={(evento) => setComplemento(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-md-10">
        <label className="form-label">Cidade</label>
        <input required value={cidade} onChange={(evento) => setCidade(evento.target.value)} type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-2">
        <label className="form-label">UF</label>
        <input required value={uf} onChange={(evento) => setUf(evento.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-12 mb-4">
        <button type="submit" className="btn btn-primary botao-formulario-cadastro">Cadastrar</button>
      </div>
    </form>
  )
}

export default Cadastro;