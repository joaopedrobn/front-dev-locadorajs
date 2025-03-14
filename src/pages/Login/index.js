import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import api from '../../services/api';
import { error } from 'toastr';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setuser] = useState('');

    const navigate = useNavigate();

    const entrar = () => {
        console.log('Entrar');

        const usuario = {
            email: email,
            senha: senha
        }

        console.log(email);
        console.log(senha);

        api
        .post("/clientes/login",
        {
            email: email,
            telefone: senha,
        },)

        .then ((response) => {
            setuser(response.data)
            navigate("/cliente")
        })

        .catch((erro) => {
            console.log(erro);
        });
    }

    const cadastrarUsuario = () => {
        console.log('Cadastro');

        const usuario = {
            email: email,
            senha: senha
        }

        console.log(email);
        console.log(senha);

        const quebraString = email.split('@');
        const nome = quebraString[0];

        console.log (nome);

        api
        .post("/clientes",
        {
            nome : nome,
            email: email,
            telefone: senha,
        },)

        .then ((response) => {
            setuser(response.data)
            navigate("/login")
        })

        .catch((erro) => {
            console.log(erro);
        });
    }

    const sair = () => {
        navigate('/home');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', margin: '0 auto' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o Email"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)} />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder="Digite a Senha"
                                                    value={senha}
                                                    onChange={e => setSenha(e.target.value)} />
                                            </FormGroup>
                                            <div className="btn-group d-flex justify-content-center" role="group">
                                                <button className="btn btn-success" onClick={entrar}>
                                                    <i className="pi pi-bitcoin"></i>
                                                    &nbsp; Entrar
                                                </button>
                                                <button className="btn btn-warning" onClick={cadastrarUsuario}>
                                                    <i className="pi pi-save"></i>
                                                    &nbsp; Cadastrar
                                                </button>
                                                    <button className="btn btn-danger" onClick={sair}>
                                                        <i className="pi pi-sign-out"></i>
                                                        &nbsp; Sair
                                                    </button>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;