import { useState } from 'react';
import './estilos.css'
import axios from 'axios';
const Login = ({onLogin}) => {
   
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   
   const efetuarLogin = (evento) => {
        evento.preventDefault();
        const usuario = {
            user: email,
            pass: senha
        }

        axios.post(`http://localhost:8080/auth`, usuario)
        .then ((resposta) => {
            console.log(resposta.data);
            localStorage.setItem('token', resposta.data.token)
            localStorage.setItem('user', email)
            onLogin(resposta.data.token)
            setEmail('')
            setSenha('')
        }).catch((erro => console.log(erro)))
   
   }

    return (

        <div>
            <h1 className="titulo-login">Login</h1>
            <form onSubmit={efetuarLogin} className="formulario-login">
                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input required value={email} onChange={(evento) => setEmail(evento.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nós nunca compartilharemos o seu e-mail.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input required  value={senha} onChange={(evento) => setSenha(evento.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary botao-login">Login</button>
            </form>
        </div>
    )
}

export default Login;